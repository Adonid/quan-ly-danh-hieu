import axios from "axios"
const END_POINT_AUTH = process.env.NEXT_PUBLIC_END_POINT_AUTH
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
    get(uri, params={}){
        return this.instance.get(uri, {params}).catch(err => err.response)
    }
    // Su dung phuong thuc POST. String uri, Object data
    post(uri, data={}){
        return this.instance.post(uri, data).catch(err => err.response)
    }
}

export default new BasicAxios