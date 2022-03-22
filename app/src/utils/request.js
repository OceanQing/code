class Request {
    constructor() {
        this.config = {
            baseURL: '/mock/6237f3a1560ad30022585979',
            timeout: 1000
        }
        this.pending = {}
    }
    removePending(key, isRequest = false) {
        if (this.pending[key] && isRequest) {
            this.pending[key]('取消重复请求')
        }
        delete this.pending[key]
    }
    interceptors() {
        instance.interceptors.request.use(function (config) {
            const key = config.url + '&' + config.method
            this.removePending(key, true)
            config.cancelToken = new CancelToken(c => {
                this.pending[key] = c
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
    }
}