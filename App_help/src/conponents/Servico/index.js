import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, TextLayoutEventData,FormControl, InputLabel, Picker } from "react-native";
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text";


export default function Title(){
    const navigation = useNavigation();
    const [servico, setServico] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [valor_servico, setValorServico] = useState('');
    const [selectedValue, setSelectedValue] = useState('');


    return(
        <View style={style.container}> 
            <View style={style.container}></View>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
            <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Serviços</Animatable.Text>
            <Animatable.Text animation="fadeInLeft" delay={800} style={{fontSize:20,color:"#C4C4C4"}}>Preencha os dados do Serviço</Animatable.Text>
            <View style={{marginTop:60}}>
               
            <Picker
                selectedValue={selectedValue}
                style={style.select}
                
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Escolha seu Serviço" value="Escolha seu Serviço" />
                <Picker.Item label="Combustivel" value="Combustivel" />
                <Picker.Item label="Mecanico" value="Mecanico" />
                <Picker.Item label="Reboque" value="Reboque" />
            </Picker>

  
            <TextInputMask
            style={style.textInput}
            type={'money'}
            placeholder="   (R$)"
            options={{
                unit: 'R$',
                suffixUnit: ''
            }}
            value={valor_servico}
            onChangeText={text => setValorServico(text)}
            />

            <TextInput
                style={style.textInput}
                onChangeText={{}}
                value={{}}
                placeholder="   Nome do Comercio"
            />

            <TextInput
                        style={style.textInput}
                        onChangeText={{}}
                        value={{}}
                        placeholder="   Endereço"
                       
                    />

            </View>
            <View>
            <TouchableOpacity>
                <Text style={style.button} onPress={ () => navigation.navigate('Inicio')} >Entrar</Text>
            </TouchableOpacity>
            </View>
            </Animatable.View>

        </View>
        
    )
}
