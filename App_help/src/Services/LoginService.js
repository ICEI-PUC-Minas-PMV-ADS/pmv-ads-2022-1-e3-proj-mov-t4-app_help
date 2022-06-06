import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import qs from 'qs'; 
import * as AxiosLogger from 'axios-logger';
import Config from "./Config"
import { Logs } from "expo";

class LoginService{
 
    async loginPrestador(params){
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
   
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
       return  instance.get(Config.API_URL + `Prestador/login?` + qs.stringify(params))
      .then((response) => {
          
      
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })

    }
    async loginUsuario(params){
 
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
   
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
       return  instance.get(Config.API_URL + `Usuarios/login?` + qs.stringify(params))
      .then((response) => {
        
      
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })

    }
}

const loginService = new LoginService()
export default loginService