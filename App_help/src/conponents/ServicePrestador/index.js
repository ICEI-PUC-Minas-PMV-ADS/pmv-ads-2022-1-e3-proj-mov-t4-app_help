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

export default function List(){
  
const LeftContent = props => <Avatar.Image size={50} source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png' }}/>


//  REPLIQUEI VARIOS DE TESTE POR CAUSA DO SCROLLVIEWS DEPOIS É SO FAZER UM FOR DENTRO DO SCROLL SE NAO DA B.O 

return(
    <Animatable.View  animation="fadeInUp" delay={400} style={styles.container}>
    <View style={styles.container}>
      
      <ScrollView style={{marginTop:5}}>
      <Card style={styles.Card}>
        <Card.Content>
          <Card.Title title="Usuario" left={LeftContent}/>
              <Title>[Nome do Usuario]</Title>
              <Paragraph>[Endereço]</Paragraph>
              <Paragraph>[Tipo do Serviço solicitado]</Paragraph>
        </Card.Content>
        <Card.Actions>
        <Button style={{backgroundColor:"green"}} mode="contained" onPress={() => console.log('Aceitar')}>
          Aceitar
        </Button>
        <Button style={{backgroundColor:"red"}}  mode="contained" onPress={() => console.log('Aceitar')}>
          Negar
        </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.Card}>
        <Card.Content>
          <Card.Title title="Usuario" left={LeftContent}/>
              <Title>[Nome do Usuario]</Title>
              <Paragraph>[Endereço]</Paragraph>
              <Paragraph>[Tipo do Serviço solicitado]</Paragraph>
        </Card.Content>
        <Card.Actions>
        <Button style={{backgroundColor:"green"}} mode="contained" onPress={() => console.log('Aceitar')}>
          Aceitar
        </Button>
        <Button style={{backgroundColor:"red"}}  mode="contained" onPress={() => console.log('Aceitar')}>
          Negar
        </Button>
        </Card.Actions>
      </Card>

      
      </ScrollView>
    </View>
    </Animatable.View>
  )
}