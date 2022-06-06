
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../conponents/Home';
import Login from '../conponents/Login';
import Registro from '../conponents/Registro';
import Servico from '../conponents/Servico';
import Inicio from '../conponents/Inicio';
import ListService from '../conponents/ListService';
import UserList from '../conponents/UserList';
import ServicePrestador from '../conponents/ServicePrestador';
import CustonUser from '../conponents/CustonUser';
import { Button, Icon, Tab } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import dbSQLite from '../Services/database';

const Drawer = createDrawerNavigator();
let tipo = false;

 function MyDrawer() {


     dbSQLite.findUsuario().then(x=>{
  

       tipo = x["_array"][0]["tipo"] == "usuario"
       console.log("find")
       console.log(tipo)
     
    })

  
  
   console.log("teste")
   console.log(tipo)

  return (
    <Drawer.Navigator screenOptions={{
      headerTintColor: '#FFF',
      drawerActiveTintColor: '#FDA060',
      headerStyle: {
        backgroundColor: '#FDA060',
      }
    }}>
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="ListService" component={ListService} />
      <Drawer.Screen name="Usuario" component={CustonUser} />
      <Drawer.Screen name="Registrar" component={Registro}    options={{
     drawerItemStyle: {
       display: tipo ? "flex" : "none",
     },
   }}/>
      <Drawer.Screen name="ServicePrestador" component={ServicePrestador} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const StackOptions = {
  headerStyle: {
    backgroundColor: '#FDA060'
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontSize:20,
    fontWeight: 'bold'
  }
}

export default function Routes() {
  return (
    <Stack.Navigator  InitialRouteName="Home"  screenOptions={StackOptions} >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="CustonUser"
          component={CustonUser}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }}
        /> 

        <Stack.Screen
          name="Servico"
          component={Servico}
          options={{ headerShown: false }}
        />  

        <Stack.Screen
          name="Inicio"
          component={MyDrawer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ServicePrestador"
          component={ServicePrestador}
          options={{ headerShown: false }}
        />

        <Stack.Screen
        name="ListService"
        component={ListService}
        options={({ navigation }) => {
          return{
            title: "Serviços Contratados",
            headerRight: () => (
              <Button 
                onPress={() => navigation.navigate("Servico")}
                type='clear'
                icon={<Icon name="add" size={36} color="white"/>}
              />
            )
          }
        }}
      /> 

      
    </Stack.Navigator>
  );
}