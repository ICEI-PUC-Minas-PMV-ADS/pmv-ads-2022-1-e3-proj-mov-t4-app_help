import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#FDA060' barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDA060',
    paddingTop:80,
    alignItems:'center',
  },
}); 
