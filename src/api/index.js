
import request from "./request";
export const fileview = params => request.get(`files/view/${params.uid}`, {
    responseType: 'arraybuffer'
   })
export const postLogin = params => request.post(`login`, params)