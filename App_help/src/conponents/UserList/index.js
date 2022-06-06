import React from "react";
import {View, Button,Text,Image, TouchableOpacity, TextInput, Alert, FlatList} from "react-native";
import {  CheckBox, ListItem } from 'react-native-elements';
import styles from "./style"
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import * as Yup from 'yup';
import Users from  '../../data/user'

export default function List(){

  function  getUserItem({item: Users }){
    return (
      <ListItem
        leftAvatar={{source: {uri: Users.avatarUrl}}}
        key={Users.id}
        title={Users.name}
        subtitle={Users.email}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}
      />
    )
  }

return(
    <Animatable.View  animation="fadeInUp" delay={400}>
    <View>
      <FlatList
      keyExtractor={Users => Users.id.toString()}
        data={Users}
        renderItem={getUserItem}
      />
    </View>
    </Animatable.View>
  )
}