import axios from 'axios';
import qs from 'qs';
/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            break;
        // 403 token过期
        case 403:
            break;
        // 404请求不存在
        case 404:
            break;
        default:
            console.log(other);   
        }}

// 创建axios实例
var axiosApi = axios.create({    
    timeout: 1000 * 12,
    // baseURL: 'https://api.example.com'
});
// 设置post请求头
axiosApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
axiosApi.interceptors.request.use(    
    config => {        
        if (config.method === 'get') {
            config.headers['Content-Type'] = 'application/json'
        }
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        return config;    
    },    
    error => Promise.error(error))

// 响应拦截器
axiosApi.interceptors.response.use(    
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),    
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            if (!window.navigator.onLine) {
            //和女友商量结果
            //弹个框提醒一下OK
            //    store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error);
            }
        }
    });
  
export default axiosApi;