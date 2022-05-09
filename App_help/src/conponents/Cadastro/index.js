import React from "react";
import {View, Button,Text,Image, TouchableOpacity, TextInput, StatusBar, Alert} from "react-native";
import styles from "./style"
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import * as Yup from 'yup';

export default function Entrar(){

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  async function handleSendForm(){
   try{
    const schema = Yup.object().shape({
      email: Yup.string().required("Preencha o seu e-mail"),
      senha: Yup.string().required("Preencha a sua senha"),
    })
    await schema.validate({email, senha})
  }catch(error){
    if(error instanceof Yup.ValidationError){
      Alert.alert(error.message)
    }
  }
  }


return(
  <View style={{backgroundColor:"#FDA060", marginTop:0}}>
    <Animatable.View  animation="fadeInUp" delay={400} style={styles.quadro}>
      <View style={{marginTop:20}}>
        <Text style={styles.Text}>Bem Vindo !</Text>
        <Text style={{fontSize:17, marginLeft:17, color:'#4E5056'}}>Para entrar, digite seus dados abaixo</Text>
      </View>
      <View style={styles.container}> 

        < TextInput
          style={styles.textInput}
          onChangeText={text => setEmail(text) }
          value={email}
          placeholder="   Email"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={text => setSenha(text) }
          value={senha}
          type={"password"}
          placeholder="   Senha"
          secureTextEntry={true}
        />

        <TouchableOpacity>
          <Text style={styles.button} onPress={handleSendForm} >Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{color:'#3DD39F', fontSize:17, marginBottom:20}}>Esqueceu a senha ?</Text>
        </TouchableOpacity>

        <Text style={{fontSize:17, marginLeft:17, color:'#4E5056', marginBottom:20}}>Nao tem conta ? se cadastre </Text>

        <TouchableOpacity>
          <Text style={styles.button} onPress={ () => navigation.navigate('Registro')} >Cadastrar</Text>
        </TouchableOpacity>
        
      </View>
    </Animatable.View>
  </View>
  )
}