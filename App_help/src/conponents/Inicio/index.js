import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, TextLayoutEventData,FormControl, InputLabel, Picker } from "react-native";
import { Avatar, Card, Paragraph, ProgressBar, Colors , Title} from 'react-native-paper';
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import dbSQLite from "../../Services/database.js";


export default function Inicio(){
    const navigation = useNavigation();
    
    
    function Navegacao(){
        dbSQLite.findUsuario().then(x=>{
  
           let idLogado =  x["_array"][0]["id"];
           
           if ( x["_array"][0]["tipo"] == "usuario"){
                navigation.navigate('Registro',{id:idLogado})
           }else {
              navigation.navigate('Servico',{id:idLogado})
           }
     
          
         })


    
      }
    
    return(
        <View style={style.container}> 
            <View>
                <TouchableOpacity activeOpacity={0.5}  onPress={Navegacao}>
                    <Image
                    source={require('../../../assets/Img/user-profile.jpg')}
                    style={style.Imagem}  
                    />
                </TouchableOpacity>
            </View>
            <View style={{width:400, height:200, marginTop:10, marginBottom:20}}>
            <Card>
                <Card.Cover source={{ uri: 'https://media.istockphoto.com/vectors/friends-going-on-road-trip-together-vector-id1327746564?s=612x612' }} />
            </Card>
            </View>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
                <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Bem vindo</Animatable.Text>
                <Animatable.Text animation="fadeInLeft" delay={800} style={{fontSize:20,color:"#000", marginLeft:15}}>O progresso do seu pedido pode ser acompanhado por aqui</Animatable.Text>
                <View style={{marginTop:60}}>
                    <Card>
                        <Card.Content>
                            <Title>[Nome do serviço]</Title>
                            <Paragraph>[nome do Comercio]</Paragraph>
                            <Paragraph>[Valor do Serviço]</Paragraph>
                            <Text  style={{fontSize:20,color:"#000"}} >O progresso do serviço esta sendo feito</Text>
                            <ProgressBar progress={0.50} color={Colors.red800} />
                        </Card.Content>
                    </Card>
                </View>
            </Animatable.View>

        </View>
        
    )
}
