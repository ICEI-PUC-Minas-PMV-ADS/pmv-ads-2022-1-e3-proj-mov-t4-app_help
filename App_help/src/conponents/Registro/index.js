import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, ScrollView, Alert, Picker} from "react-native";
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from "react-native-masked-text";
import { useState } from "react";
import usuarioService from '../../Services/UsuarioService';
import * as Yup from 'yup';
import moment from 'moment';

import prestadorService from "../../Services/PrestadorService.js";

export default function Title({ route }){

    const navigation = useNavigation();
    const id = route.params.id
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_nascimento, setDataNascimento] = useState('');
    const [chassi, setChassi] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    


    if (id !=0 ){
        if (!nome){
            usuarioService.get(id).then(x=>{
                setNome(x.data.nome)
                setCpf(x.data.cpf)
                setDataNascimento( moment(x.data.data_nascimento).format("DD/MM/YYYY"))
                setEmail(x.data.email)  
                setSenha(x.data.senha)
                setEndereco(x.data.endereco)
                setNumero(x.data.numero)
                setBairro(x.data.bairro)
                setCidade(x.data.cidade)
                setEstado(x.data.estado)
                })
        }
    
  
}
 
    
    function formartDate(date){
        darr = date.split("/");   
        return new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
    }

    async function handleSendForm(){
        try{
            console.log("handle")
         const schema = Yup.object().shape({
           email: Yup.string().email("Email com formato inválido").required("Preencha seu E-mail"),
           senha: Yup.string().required("Preencha sua Senha"),
           nome: Yup.string().required("Preencha seu Nome"),
           cpf: Yup.string().required("Preencha seu CPF"),
           data_nascimento: Yup.string().required("Preencha seu Data de Nascimento"),
           endereco: Yup.string().required("Preencha seu endereco"),
         })
         await schema.validate({email, senha, nome, cpf, data_nascimento,  endereco})
         salvar()
       }catch(error){
         if(error instanceof Yup.ValidationError){
           Alert.alert(error.message)
         }
       }
       }

       const salvar = () => {
          let data = {
            id:id,
            nome: nome,
            cpf: cpf,
            data_nascimento: formartDate(data_nascimento),
            email: email,
            senha: senha,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,        
          }

          console.log("salvar")

          if (id==0){
            usuarioService.cadastrar(data).then(x=>{
                Alert.alert("Cadastro com sucesso")
            })
         }else{
            usuarioService.editar(data,id).then(x=>{
                 Alert.alert("Editado com sucesso")
                 navigation.navigate("Inicio")
             }) 
         }

     
        
      }

    return(
    
        <View style={style.container}> 
            <View style={style.container}></View>
            <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Usuario</Animatable.Text>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
                <ScrollView style={{marginTop:5}}>
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setNome(text) }
                        value={nome}
                        placeholder="   Nome"
                    />
                    <TextInputMask
                        style={style.textInput}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        placeholder={"  Data de Nascimento (DD/MM/YYYY)"}
                        value={data_nascimento}
                        onChangeText={text => setDataNascimento(text)}
                    />
                    <TextInputMask
                        style={style.textInput}
                        placeholder={"  CPF (000.000.000-00)"}
                        type={'cpf'}
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                    />
        
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setEmail(text) }
                        value={email}
                        placeholder="   Email"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setSenha(text) }
                        value={senha}
                        type={"password"}
                        placeholder="   Senha"
                        secureTextEntry={true}
                    />
            
                    <TextInput
                        style={style.textInput}
                        value={endereco}
                        placeholder="   Endereço"
                        onChangeText={text => setEndereco(text)}
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={Number => setNumero(Number)}
                        value={numero}
                        placeholder="   Numero"
                       
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setBairro(text)}
                        value={bairro}
                        placeholder="   Bairro"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setCidade(text)}
                        value={cidade}
                        placeholder="   Cidade"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setEstado(text)}
                        value={estado}
                        placeholder="   Estado"
                    />

           
                </ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={style.button} onPress={salvar} >Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        
    )
}