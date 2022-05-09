import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FDA060",
        justifyContent:"center",
        alignItems:"center",
    },
    containerForm: {
       
        backgroundColor:"#FFF",
        borderRadius:20,
        width:390,
        height:340,
    },
    Text: {
        fontSize:40,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10,
        lineHeight:38,
    },
    textInput: {
        width:350,
        height:50,
        backgroundColor:'#E9E9E9',
        borderRadius:10,
        marginBottom:23,
    },
    button:{
        backgroundColor:"#3DD39F",
        width:350,
        height:45,
        borderRadius:10,
        color:'#FFF',
        fontSize:20,
        textAlign:'center',
        marginTop:20,
    },
    select: { 
        height: 50, 
        width: 350,
        marginBottom:20,
        borderRadius:10,
    },
})

export default styles