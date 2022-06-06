import React from "react";
import {View, Button,Text,Image, TouchableOpacity, TextInput, Alert, Picker} from "react-native";
import {  CheckBox } from 'react-native-elements';
import styles from "./style"
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import * as Yup from 'yup';
import loginService from "../../Services/LoginService";
import dbSQLite from "../../Services/database";

export default function Entrar(){

  const navigation = useNavigation();

  const [email, setEmail] = useState('teste@teste.com');
  const [senha, setSenha] = useState('teste');
  const [selectedValue, setSelectedValue] = useState('usuario');
  // const [isSelected, setSelected] = useState(false)




  async function handleSendForm(){
   try{
    const schema = Yup.object().shape({
      email: Yup.string().required("Preencha o seu e-mail"),
      senha: Yup.string().required("Preencha a sua senha"),
      
      
    })
    await schema.validate({email, senha})
    login()
  }catch(error){
    if(error instanceof Yup.ValidationError){
      Alert.alert(error.message)
    }
  }
}

const login = () => {
  let data = {
    email: email,
    senha: senha  
  }


  if (selectedValue === "prestador"){
  
    loginService.loginPrestador(data).then(x=>{
      if (x.status===204){
        Alert.alert("Usuario ou senha  invalidos")
      }else {
          let user = {
            id : x.data.id,
            nome :x.data.nome,
            tipo : selectedValue
          }
          dbSQLite.addData(user)
 
      }
    })
  }else if (selectedValue === "usuario") {

    loginService.loginUsuario(data).then(x=>{
    
      if (x.status===204){
        Alert.alert("Usuario ou senha  invalidos")
      }else {
        console.log(x)
          let user = {
            id : x.data.id,
            nome :x.data.nome,
            tipo : selectedValue
          }
          console.log("logou usuario")
          dbSQLite.addData(user)
       
          navigation.navigate('Inicio')
      }

    }
      
     )
  }else{
    Alert.alert("Selecione um tipo de login")
  }


 

}

const cadastrar =()=>{
  Alert.alert(
    "Cadastro",
    "Deseja se cadastrar como ",
    [
      {
        text: "PRESTADOR",
        onPress: () => navigation.navigate('Servico',{id:0}) ,
        style: "cancel"
      },
      { text: "USUARIO", onPress: () => navigation.navigate('Registro',{id:0}) }
    ]
  );

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

        <Picker
            selectedValue={selectedValue}
            style={styles.select}
            
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="LOGAR COMO" value="logar como" />
            <Picker.Item label="PRESTADOR" value="prestador" />
            <Picker.Item label="USUARIO" value="usuario" />
        </Picker>

        <TouchableOpacity>
          <Text style={styles.button} onPress={handleSendForm} >Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{color:'#3DD39F', fontSize:17, marginBottom:20}}>Esqueceu a senha ?</Text>
        </TouchableOpacity>

        <Text style={{fontSize:17, marginLeft:17, color:'#4E5056', marginBottom:20}}>Nao tem conta ? se cadastre </Text>

        <TouchableOpacity>
          <Text style={styles.button} onPress={ cadastrar} >Cadastrar</Text>
        </TouchableOpacity>
        
      </View>
    </Animatable.View>
  </View>
  )
}