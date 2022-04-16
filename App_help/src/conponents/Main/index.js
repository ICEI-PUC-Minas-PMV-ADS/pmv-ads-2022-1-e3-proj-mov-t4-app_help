import React from "react";
import {View, Button,Text,Image, TouchableOpacity} from "react-native";
import styles from "./style";





export default function Title(){
    return(
        <View style={{marginTop:600}}> 
    
            <View style={{marginLeft:20}}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.text}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
