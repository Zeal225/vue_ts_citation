import axios, { AxiosError, AxiosInstance, AxiosResponse} from "axios";
import  Vue from 'vue'
export let base_url = 'https://api-backend.cinetpay.ci';

class Api {
    // @ts-ignore
    client = AxiosInstance;
    // @ts-ignore
    access_token;
    constructor() {
        const baseUrl = base_url;
        const headers = {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json',
        };
        this.client = axios.create(
            {
                baseURL : baseUrl,
                withCredentials: false,
                headers,
            },
        );
    }
}
export let api = new Api();
