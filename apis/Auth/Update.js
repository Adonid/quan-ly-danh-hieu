import axios from "axios"
import {checkTokenInCookie, getToken} from 'general/helper/cookie'
const END_POINT_MYSELF = process.env.NEXT_PUBLIC_END_POINT_MYSELF
const TIME_OUT = process.env.NEXT_PUBLIC_TIME_OUT

export async function fetching(uri, token, params=false){
    const jwt = getToken(token)
    // String url
    const URL = params!==false?END_POINT_USER+uri+'?params='+JSON.stringify(params):END_POINT_USER+uri
    // Default options are marked with *
    return await fetch(URL, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        timeout: TIME_OUT,
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + jwt
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
}

export function get(uri, params={}){
    const instance = axios.create({
        baseURL: END_POINT_MYSELF,
        timeout: TIME_OUT,
        responseType: 'json',
        headers: { Authorization: "Bearer " + checkTokenInCookie()}
    })
    return instance.get(uri, {params}).catch(err => err.response)
}

export function post(uri, data={}){
    const instance = axios.create({
        baseURL: END_POINT_MYSELF,
        timeout: TIME_OUT,
        responseType: 'json',
        headers: { Authorization: "Bearer " + checkTokenInCookie()}
    })
    return instance.post(uri, data).catch(err => err.response)
}