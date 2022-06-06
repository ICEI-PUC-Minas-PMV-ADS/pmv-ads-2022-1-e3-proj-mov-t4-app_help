import React from "react";
import { View, Button, Text, Image, TouchableOpacity, TextInput, TextLayoutEventData, FormControl, InputLabel, Picker, Alert } from "react-native";
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import * as Yup from 'yup';
import prestadorService from "../../Services/PrestadorService.js";
import Routes from "../../routes/index.js";

export default function Title({ route }) {
    const navigation = useNavigation();
    const id = route.params.id

    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [nome_do_comercio, setNomeComercio] = useState('');
    const [senha, setSenha] = useState('');
    const [valor_servico, setValorServico] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
  
    if (id !=0 ){
            if (!nome){
                prestadorService.get(id).then(x=>{
                    setCnpj(x.data.cnpj)
                    setEmail(x.data.email)  
                    setNome(x.data.nome)
                    setNomeComercio(x.data.nome_do_comercio)
                    setSenha(x.data.senha)
                    setValorServico(x.data.valor_servico)
                    setSelectedValue(x.data.servico_do_comercio)
                    })
            }
           

        
      
    }

    async function handleSendForm(){
        try{
         const schema = Yup.object().shape({
          cpnj: Yup.string().required("Preencha seu CNPJ"),
          nome: Yup.string().required("Preencha seu Nome"),
          nome_do_comercio: Yup.string().required("Preencha seu Nome fantasia"),
          email: Yup.string().email("Email com formato inválido").required("Preencha seu E-mail"),
          senha: Yup.string().required("Preencha sua Senha"),
          valor_servico: Yup.string().required("Preencha seu valor"),
          
         })
         await schema.validate({cpnj,nome, nome_do_comercio, email, senha, valor_servico})
         salvar()
       }catch(error){
         if(error instanceof Yup.ValidationError){
           Alert.alert(error.message)
         }
       }
       }

    const salvar = () => {

        let data = {
            id:id,
            cpnj: cnpj,
            nome:nome,
            nome_do_comercio:nome_do_comercio,
            email: email,
            senha: senha,
            valor_servico:valor_servico.replace('R$',"").replace(".","").replace(",","."),
            servico_do_comercio:selectedValue
          }
          console.log(data)
        if (id==0){
           prestadorService.cadastrar(data).then(x=>{
               Alert.alert("Cadastro com sucesso")
           })
        }else{
            prestadorService.editar(data,id).then(x=>{
                Alert.alert("Editado com sucesso")
                navigation.navigate("Inicio")
            }) 
        }

    }


    return (
        <View style={style.container}>
            <View style={style.container}></View>
            <Animatable.View animation="fadeInUp" delay={300} style={style.containerForm}>
                <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Serviços</Animatable.Text>
                <Animatable.Text animation="fadeInLeft" delay={800} style={{ fontSize: 20, color: "#C4C4C4" }}>Preencha os dados do Serviço</Animatable.Text>
                <View style={{ marginTop: 60 }}>
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setNome(text)}
                        value={nome}
                        placeholder="   Nome"
                    />
                     <TextInput
                        style={style.textInput}
                        onChangeText={text => setNomeComercio(text)}
                        value={nome_do_comercio}
                        placeholder="   Nome Fantasia"
                    />
                    <TextInputMask
                        style={style.textInput}
                        placeholder={"  cnpj (99.999.999/9999-99)"}
                        type={'cnpj'}
                        value={cnpj}
                        onChangeText={text => setCnpj(text)}
                    />
                      <TextInput
                        style={style.textInput}
                        onChangeText={text => setEmail(text) }
                        value={email}
                        placeholder="   Email"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setSenha(text) }
                        value={senha}
                        type={"password"}
                        placeholder="   Senha"
                        secureTextEntry={true}
                    />
                    <Picker
                        selectedValue={selectedValue}
                        style={style.select}

                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Escolha seu Serviço" value="Escolha seu Serviço" />
                        <Picker.Item label="Combustivel" value="Combustivel" />
                        <Picker.Item label="Mecanico" value="Mecanico" />
                        <Picker.Item label="Reboque" value="Reboque" />
                    </Picker>


                    <TextInputMask
                        style={style.textInput}
                        type={'money'}
                        placeholder="   (R$)"
                        options={{
                            unit: 'R$',
                            suffixUnit: ''
                        }}
                        value={valor_servico}
                        onChangeText={text => setValorServico(text)}
                    />

                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={style.button} onPress={handleSendForm} >Salvar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>

    )
}
