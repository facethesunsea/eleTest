import axios from 'axios';

axios.interceptors.request.use(
    config=>{
        // console.log('request start...')
        // console.log(config)
        return config;
    },
    error=>{
        // console.log('request error...')
        return error;
    }
)

axios.interceptors.response.use(
    response=>{
        // console.log('response start...')
        // console.log(response)
        return response;
    },
    error=>{
        // console.log('response error...')
        return error;
    }
)

export default axios;