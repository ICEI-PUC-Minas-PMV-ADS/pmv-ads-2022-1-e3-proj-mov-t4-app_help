import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FDA060",
        flex:1,
    },
    containerLogo: {
        flex: 2,
        backgroundColor:"#FDA060",
        justifyContent:"center",
        alignItems:"center",
    },
    containerForm: {
        flex:0.5,
        borderRadius:20,
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    Text: {
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:"#FFF",
        lineHeight:38,
    },
    button:{
        backgroundColor:"#3DD39F",
        width:350,
        height:45,
        borderRadius:30,
        color:'#FFF',
        fontSize:20,
        textAlign:'center',
        marginTop:58,
        textAlignVertical:"center",
    },
})

export default styles