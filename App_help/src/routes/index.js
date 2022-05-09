import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../conponents/Home';
import Cadastro from '../conponents/Cadastro';
import Registro from '../conponents/Registro';
import Servico from '../conponents/Servico';
import Inicio from '../conponents/Inicio'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
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
          component={Inicio}
          options={{ headerShown: false }}
        />  

    </Stack.Navigator>
  );
}