import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, ScrollView, Alert} from "react-native";
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

    async function handleSendForm(){
        try{
         const schema = Yup.object().shape({
           email: Yup.string().required("Preencha seu E-mail"),
           senha: Yup.string().required("Preencha sua Senha"),
           cell: Yup.string().required("Preencha sua Celular"),
           nome: Yup.string().required("Preencha seu Nome"),
           cpf: Yup.string().required("Preencha seu CPF"),
           data_nascimento: Yup.string().required("Preencha seu Data de Nascimento"),
           chassi: Yup.string().required("Preencha seu Chassi"),
           endereco: Yup.string().required("Preencha seu endereco"),
         })
         await schema.validate({email, senha, cell, nome, cpf, data_nascimento, chassi, endereco})
         salvar()
       }catch(error){
         if(error instanceof Yup.ValidationError){
           Alert.alert(error.message)
         }
       }
       }

       const salvar = () => {
           Alert.alert("chegou no salvar")
        if (handleSendForm()){
        //   setLoading(true)
          
          let data = {
            nome: nome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            email: email,
            senha: senha,
            chassi: chassi,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,        
          }
          
          usuarioService.cadastrar(data)
          .then((response) => {
            setLoading(false)
            Alert.alert(response.data.mensagem)
            setTitulo(null)
            setDescricao(null)
          })
          .catch((error) => {
            setLoading(false)
            Alert.alert("Erro", "Houve um erro inesperado")
          })
        }
      }

    return(
    
        <View style={style.container}> 
            <View style={style.container}></View>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
                <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Registre</Animatable.Text>
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
                            format: 'YYYY/MM/DD'
                        }}
                        placeholder={"  Data de Nascimento (YYYY/MM/DD)"}
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
                        value={{}}
                        placeholder="   Endereço"
                        onChangeText={text => setEndereco(text)}
                       
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={Number => setNumero(Number)}
                        value={{}}
                        placeholder="   Numero"
                       
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setBairro(text)}
                        value={{}}
                        placeholder="   Bairro"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setCidade(text)}
                        value={{}}
                        placeholder="   Cidade"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setEstado(text)}
                        value={{}}
                        placeholder="   Estado"
                    />
                </ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={style.button} onPress={salvar} >Entrar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        
    )
}
