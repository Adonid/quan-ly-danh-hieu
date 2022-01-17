import axios from "axios"
const END_POINT_AUTH = process.env.NEXT_PUBLIC_END_POINT
const TIME_OUT = process.env.NEXT_PUBLIC_TIME_OUT

class BasicAxios{
    // Khoi tao thuc the
    constructor(){
        const instance = axios.create({
            baseURL: END_POINT_AUTH,
            timeout: TIME_OUT,
            responseType: 'json'
        })
        this.instance = instance
    }
    // Su dung phuong thuc GET. String uri, Object data
    async get(uri, params={}){
        return await this.instance.get(uri, {params}).catch(err => err.response)
    }
    // Su dung phuong thuc POST. String uri, Object data
    async post(uri, data={}){
        return await this.instance.post(uri, data).catch(err => err.response)
    }
}

export default new BasicAxios