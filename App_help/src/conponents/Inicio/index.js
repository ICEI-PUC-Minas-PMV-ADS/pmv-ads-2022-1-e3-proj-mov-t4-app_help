import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, TextLayoutEventData,FormControl, InputLabel, Picker } from "react-native";
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text";


export default function Title(){
    const navigation = useNavigation();
    
    return(
        <View style={style.container}> 
            <Animatable.Image
                    animation="flipInY"
                    delay={600}
                    source={require('../../../assets/Img/caminhao.png')}
                    style={{ width:'100%',marginTop:180}}
                    resizeMode="contain"
                />
            <View style={style.container}></View>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
                <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Serviços</Animatable.Text>
                <Animatable.Text animation="fadeInLeft" delay={800} style={{fontSize:20,color:"#C4C4C4"}}>Preencha os dados do Serviço</Animatable.Text>
                <View style={{marginTop:60}}>
                
                    <Text>ola</Text>
                </View>
            </Animatable.View>

        </View>
        
    )
}
