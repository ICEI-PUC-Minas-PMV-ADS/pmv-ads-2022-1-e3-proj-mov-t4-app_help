import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Alert } from "react-native-web"
import * as AxiosLogger from 'axios-logger';
import Config from "./Config"

class SolicitacaoService{

    async cadastrar (data){
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Solicitacao",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            console.log(error)
            return Promise.reject(error)
        })
    }

    
 
}

const solicitacaoService = new SolicitacaoService()
export default solicitacaoService