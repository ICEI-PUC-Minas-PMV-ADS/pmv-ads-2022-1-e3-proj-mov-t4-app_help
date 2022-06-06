import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Alert } from "react-native-web"
import * as AxiosLogger from 'axios-logger';
import Config from "./Config"

class UsuarioService{

    async cadastrar(data){
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Usuarios",
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

    async editar(data){
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Usuarios/" + data.id ,
            method: "PUT",
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
    async get(id){
    
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Usuarios/" + id,
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            
            return Promise.resolve(response)
        }).catch((error) => {
            console.log(error)
            return Promise.reject(error)
        })
    }
 
    // async function signIn(data) {
    //     if (username.length === 0) return
    
    //     setLoading(true)
    
    //     try {
    
    //       const credentials = {
    //         email: username,
    //         password: password
    //       }
    // }
}


const usuarioService = new UsuarioService()
export default usuarioService