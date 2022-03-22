import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const CancelToken = axios.CancelToken;
let cancel;

const pending = {}

function removePending(key, isRequest = false) {
    if (pending[key] && isRequest) {
        pending[key]('取消请求')
    }
    delete pending[key]
}

var instance = axios.create({
    baseURL: '/mock/6237f3a1560ad30022585979',
    timeout: 1000
})

instance.interceptors.request.use(function (config) {
    let key = config.url + '&' + config.method
    removePending(key, true)
    config.cancelToken = new CancelToken(function executor(c) {
        pending[key] = c
    })
    return config;
}, function (error) {
    return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
});

instance.get('/user/list', {
}).then(res => {
    console.log('res', res)
}).catch(error => {
    console.log('error, ', error)
})
instance.get('/user/list', {
}).then(res => {
    console.log('res', res)
}).catch(error => {
    console.log('error, ', error)
})
instance.get('/user/list', {
}).then(res => {
    console.log('res', res)
}).catch(error => {
    console.log('error, ', error)
})
instance.get('/user/list', {
}).then(res => {
    console.log('res', res)
}).catch(error => {
    console.log('error, ', error)
})
instance.post('/user/list', { name: '张三' }).then(res => {
    console.log('res', res)
}).catch(error => {
    console.log('error, ', error)
})


setTimeout(() => {
    instance.get('/user/list', {
    }).then(res => {
        console.log('res', res)
    }).catch(error => {
        console.log('error, ', error)
    })
}, 10000);

createApp(App).use(store).use(router).mount('#app')
