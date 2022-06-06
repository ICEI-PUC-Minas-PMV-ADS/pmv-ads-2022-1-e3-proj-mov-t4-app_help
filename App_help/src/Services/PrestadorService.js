import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Alert } from "react-native-web"
import * as AxiosLogger from 'axios-logger';
import Config from "./Config"

class PrestadorService{

    async cadastrar(data){
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Prestador",
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

    async editar(data,id){
        const instance = axios.create();
        instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Prestador/" + id ,
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
            url: Config.API_URL + "Prestador/" + id,
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
    async findAll(id){
       
        const instance = axios.create();
        // instance.interceptors.request.use(AxiosLogger.requestLogger);
        
        // instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        // instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        return instance({
            url: Config.API_URL + "Prestador",
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
 
}

const prestadorService = new PrestadorService()
export default prestadorService