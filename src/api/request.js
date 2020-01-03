/**
 * @note
 * @author  wangyuefeng
 * @create  2018-10-25
 * @des     全局配置axios
 */
import axios from 'axios';
const qs = require('query-string');
import {message} from 'antd';
// import store from '../store' import {showLoading} from
// '../actions/showLoading';

const ResCode = {
    '202': '请先注册在登录~'
}

axios.defaults.headers['Content-Type'] = 'application/json';

// 添加请求拦截器

axios
    .interceptors
    .request
    .use(function (config) {
        
        if (!config.headers.Authorization&&sessionStorage.token) {
            config.headers.Authorization = 'Bearer ' + sessionStorage.token || ''
        }else{
            config.headers.Authorization = null
        }
        if(DEVELEPMENT){
            config.url = '/api/' + config.url
        }
        // store.dispatch(showLoading({'loading': true})) 在发送请求之前做些什么
        // config.data = qs.stringify(config.data)
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
axios
    .interceptors
    .response
    .use(function (res) {
        // store.dispatch(showLoading({'loading': false})) 对响应数据做点什么
        if (res.status < 200 || res.status > 300) {
            message.error(res.data.msg)
            return Promise.reject(res.data || {})
        } else {
            return res.data.data || res.data
        }

    }, function (error) {
        // if (error.response.status == 401) {
        //     window.location.href = `${hosts}/login`
        // }

        // 对响应错误做点什么
        return Promise.reject(error);
    });

export default axios;