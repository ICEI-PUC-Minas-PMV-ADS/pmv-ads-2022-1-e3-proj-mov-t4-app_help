import React from "react";
import {View,Text,Image, TouchableOpacity, TextInput, Alert, ScrollView} from "react-native";
import { Avatar,Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import {  CheckBox } from 'react-native-elements';
import styles from "./style"
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import * as Yup from 'yup';
import prestadorService from "../../Services/PrestadorService";
import dbSQLite from "../../Services/database";
import solicitacaoService from "../../Services/SolicitacaoService";

export default  function List(){
  
const LeftContent = props => <Avatar.Image size={50} source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png' }}/>
const [isLoading, setLoading] = useState(true);
const [prestadores, setPrestadores] = useState([]);

prestadorService.findAll().then(x=> {
  setPrestadores(x.data)

})

const solicitar = (id)=>{
  dbSQLite.findUsuario().then(x => {
    idUsuario = x["_array"][0]["id"]
    
    let data = {
      id:0,
      usuarioID: idUsuario,
      prestadorID: id,
      status : "NOVO"
      
    }
    solicitacaoService.cadastrar(data)

  })

}

const verificarSolicitacao = (id)=>{
  Alert.alert(
    "Cadastro",
    "Deseja se solicitar o serviço ",
    [
      {
        text: "não",
        onPress: () => solicitar(id) ,
        style: "cancel"
      },
      { text: "USUARIO", onPress: () => solicitar(id)  }
    ]
  );

}






return(
    <Animatable.View  animation="fadeInUp" delay={400} style={styles.container}>
    <View style={styles.container}>

      <ScrollView style={{marginTop:5}}>
     {prestadores.map((item) => {
         return (
          <Card style={styles.Card} >
          <Card.Content>
            <Card.Title title="Serviço" left={LeftContent} />
                <Title>{item.servico_do_comercio}</Title>
                <Paragraph>{item.nome_do_comercio}</Paragraph>
                <Paragraph>{item.valor_servico}</Paragraph>
              <Card.Cover source={{ uri: 'https://media.istockphoto.com/vectors/friends-going-on-road-trip-together-vector-id1327746564?s=612x612' }} />
          </Card.Content>
          <Card.Actions>
          <Button  mode="contained" onPress={() => verificarSolicitacao(item.id)}>
            Solicitar
          </Button>
          </Card.Actions>
        </Card>
  
         );
      })} 
   
     
      </ScrollView>
    </View>
    </Animatable.View>
  )
}