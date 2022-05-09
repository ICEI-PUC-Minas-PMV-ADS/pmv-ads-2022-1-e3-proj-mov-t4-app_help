import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Config from "./Config"

class CadastroUsuario{
    async cadastrar(data){
        return axios({
            url: Config.API_URL + "api/Usuario",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json', 
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const servicoService = new ServicoService()
export default servicoService