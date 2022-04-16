import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import Main from './src/conponents/Main';


export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/fundo.png')} style={{width: '100%', height: '100%'}}>
      <Main></Main>
    </ImageBackground>  
    </View>
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
