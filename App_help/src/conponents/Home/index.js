import React from "react";
import { View, Button, Text,Image,TouchableOpacity , Picker} from "react-native";
import style from "./style";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import dbSQLite from "../../Services/database";


export default function Title(){
    const navigation = useNavigation();
    
    function entrar(){
//   dbSQLite.findUsuario().then(x=>{

//    if (x["length"]==1){
//     if (x["_array"][0]["tipo"] == "usuario") {
//       console.log("usuario dbsqlite")
     
//       navigation.navigate('Inicio')
//     }
//    }
//   })
  navigation.navigate('Login')
    }

    return(
        <View style={style.container}> 
            <View style={style.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    delay={700}
                    source={require('../../../assets/Img/fundo.png')}
                    style={{ width:'100%'}}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View  animation="fadeInUp" style={style.containerForm}>
                <TouchableOpacity
                    style={style.button}
                    onPress={ entrar}>
                    <Text style={style.Text}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
        
    )
}
