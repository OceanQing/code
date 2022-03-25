class Commitment {
    static pending = 'pending'
    static fulfilled = 'fulfilled'
    static rejected = 'rejected'
    constructor(fn) {
        this.status = Commitment.pending
        this.result = null
        fn(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(res) {
        this.status = Commitment.fulfilled
        this.result = res
    }
    reject(res) {
        this.status = Commitment.rejected
        this.result = res
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        if (this.status === Commitment.fulfilled) {
            return this.resolve(onFulfilled(this.result))
        }
        if (this.status === Commitment.rejected) {
            return this.rejected(onRejected(this.result))
        }
    }
}

console.log('第一步')

const commitment = new Commitment((resolve, reject) => {
    console.log('第二步')
    resolve('hello world')
})
commitment.then(res => {
    console.log('第五步')
    return res
})
commitment.then(res => {
    console.log('第六步')
    console.log(res)
    return res
})
console.log('第三步')