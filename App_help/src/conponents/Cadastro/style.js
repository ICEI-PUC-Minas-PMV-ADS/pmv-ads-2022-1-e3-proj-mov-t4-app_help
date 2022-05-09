import { StyleSheet } from 'react-native'
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:-250,
    },
    quadro: {
        width:400,
        height:800,
        marginTop:350,
        backgroundColor:'#FFF',
        borderRadius:30,
    },
    button: {
        backgroundColor:"#3DD39F",
        width:350,
        height:45,
        borderRadius:25,
        marginBottom:20,
        color:'#FFF',
        fontSize:20,
        textAlign:'center',
        textAlignVertical:"center",
    },
    textInput: {
        width:350,
        height:50,
        backgroundColor:'#E9E9E9',
        borderRadius:20,
        marginBottom:40,
    },
    Text: {
        fontSize:40,
        fontWeight:'bold',
        marginLeft:15,
    },
   
});

export default styles