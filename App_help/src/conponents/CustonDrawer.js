import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';


import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const navigation = useNavigation();
    
// function Navegacao(){
//     dbSQLite.findUsuario().then(x=>{

//        let idLogado =  x["_array"][0]["id"];
       
//        if ( x["_array"][0]["tipo"] == "usuario"){
//             navigation.navigate('Registro',{id:idLogado})
//        }else {
//           navigation.navigate('Servico',{id:idLogado})
//        }
 
      
//     })}


const CustomDrawer = props => {
  return (

    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <TouchableOpacity onPress={() => {}}>
        <ImageBackground
          source={require('../../assets/Img/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../../assets/Img/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Teste
          </Text>
          <View style={{flexDirection: 'row'}}>
          </View>
        </ImageBackground>
        </TouchableOpacity >
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Compartilhe com um amigo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              encerrar Sessão
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;