import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, ScrollView, Alert, Picker} from "react-native";
import { Appbar, Colors } from 'react-native-paper'
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from "react-native-masked-text";
import { useState } from "react";
import usuarioService from '../../Services/UsuarioService';
import * as Yup from 'yup';

export default function Title(){
    const navigation = useNavigation();
    const [cell, setCell] = useState('');
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
    
    function Navegacao(){
        navigation.navigate("Inicio")
      }
    
    function formartDate(date){
        darr = date.split("/");   
        return new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
    }

    async function handleSendForm(){
        try{
         const schema = Yup.object().shape({
          nome: Yup.string().required("Preencha seu E-mail"),
           email: Yup.string().email("Email com formato inválido").required("Preencha seu E-mail"),
           senha: Yup.string().required("Preencha sua Senha"),
           cell: Yup.string().required("Preencha sua Celular"),
           nome: Yup.string().required("Preencha seu Nome"),
           cpf: Yup.string().required("Preencha seu CPF"),
           data_nascimento: Yup.string().required("Preencha seu Data de Nascimento"),
           chassi: Yup.string().required("Preencha seu Chassi"),
           endereco: Yup.string().required("Preencha seu endereco"),
         })
         await schema.validate({nome,email, senha, cell, nome, cpf, data_nascimento, chassi, endereco})
         salvar()
       }catch(error){
         if(error instanceof Yup.ValidationError){
           Alert.alert(error.message)
         }
       }
       }

       const salvar = () => {
          let data = {
            nome: nome,
            cpf: cpf,
            data_nascimento: formartDate(data_nascimento),
            email: email,
            senha: senha,
            chassi: chassi,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,        
          }

          console.log("salvar") 
          usuarioService.cadastrar(data)
          .then((response) => {
       
       
            Alert.alert("Salvo com sucesso")
            //Alert.alert(response.data.mensagem)
          
          })
          .catch((error) => {
            console.error(error)
            Alert.alert("Erro", "Houve um erro inesperado")
          })

      }

    return(
    
        <View style={style.container}> 
            <Appbar.Header style={{backgroundColor:"#FDA060"}} >
            <Appbar.BackAction onPress={Navegacao}  />
            </Appbar.Header>
            <View style={style.container}></View>
            <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Deseja realizar alguma alteração ?</Animatable.Text>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
                <ScrollView style={{marginTop:2}}>
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
                        onChangeText={text => setChassi(text) }
                        value={chassi}
                        placeholder="   Chassi"
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
                    <TextInputMask
                        style={style.textInput}
                        type={'cel-phone'}
                        placeholder={"  Celular"}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={cell}
                        onChangeText={ text => setCell(text) }
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
                        <Text style={style.button} onPress={handleSendForm} >Realizar alteração</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        
    )
}