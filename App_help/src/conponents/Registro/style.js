import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FDA060",
        flex:1,
    },
    container: {
        flex: 1,
        backgroundColor:"#FDA060",
        justifyContent:"center",
        alignItems:"center",
    },
    containerForm: {
        flex:20,
        backgroundColor:"#FFF",
        borderRadius:20,
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    Text: {
        fontSize:40,
        fontWeight:'bold',
        marginLeft:5,
        lineHeight:38,
        textAlign:"center",
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
        marginTop:18,
        textAlignVertical:"center",
        marginBottom:15
    },
    select: { 
        height: 50, 
        width: 350,
        marginBottom:20,
        borderRadius:10,
    },
})

export default styles