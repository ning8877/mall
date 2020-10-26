import axios from 'axios'

export function request(config){
  return new Promise((resolve,reject)=>{
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000/api/h8',
      timeout:5000
    })

    //这里拦截的是实例的
    //请求拦截器
    instance.interceptors.request.use(config=>{
      //request拦截success
      // config.auth = token

      return config
    },err=>{
      //request拦截failure
      return err
    })

    //响应拦截器
    instance.interceptors.response.use(res=>{
      //response拦截success
      return res.data
    },err=>{
      //response拦截failure
      return err
    })

    return instance(config)
  })
}

//axios.interceptors拦截全局

