## 基础
### 1.JS数据类型
* 基本数据类型
> Number String Boolean Null Undefined Symbol BigInt 
* 引用数据类型
> Object Array Date Function RegExp
### 2.JS变量和函数的声明提升
> 在JS中变量和函数的声明会提升到最顶部执行，函数的提升高于变量的提升，匿名函数不会提升
### 3.闭包
* 内部函数访问外部函数的变量。内部函数在执行的时候，会形成一个闭包，会存储需要访问的变量，这样内部函数就可以访问外部函数的变凉了。
### 4.==和===的区别
* == 值相等并且会发生隐式转换
* === 值相等并且引用地址相等
### 5.this
谁调用的函数，函数的this就指向谁 
new 构造函数 构造函数的this会指向实例
### 6.JS数组和对象的遍历方式
* 遍历数组
* map 
* forEach
* reduce
* for
* while
* for of

* filter
* some
* every

* 遍历对象
* for in
* for of 

### 7.map和forEach的区别
* map 可以指定返回值
* forEach 返回undefined 
### 8.箭头函数和普通函数的区别
* 箭头函数没有自己的this,它的this就是
### 9.同源策略
http协议 域名 端口都相同
### 10.如何解决跨域
jquery的jsonp
webpack 设置proxy
nginx 设置代理
### 11.严格模式的限制
### 12.es6的新增
* 对象的属性
    * configurable 是否可以删除
    * enumerable 是否可以枚举
    * writable 是否可以修改
* 严格模式
    * 严格模式 变量的变化
        * 非严格模式 
            * 不用var可以直接创建全局变量
            * 有变量的提升
            * 可以删除变量
        * 严格模式
            * 变量的声明必须用let const var
            * 变量必须先创建再使用
            * 不可以删除变量
            * 变量的命名不可以用保留字
    * 严格模式操作对象的属性
        * 非严格模式 不可修改的属性赋值，删除不可删除的属性 不会生效，但不会报错
        * 严格模式 会报错
    * 严格模式 arguments
        * 非严格模式修改传入的参数，arguments也会改变
        * 严格模式不会改变
    * 严格模式中的if语句的条件表达式不能是函数，否则会报错。
    * 严格模式this
        * 非严格模式 call apply bind 将null和undefined作为this值时，会转化成全局对象
        * 严格模式 不会进行转化
    * 严格模式下不能使用
        * eval 函数
        * with 语句
        * 八进制字面量 以0开头的数字

* 数据类型 Symbol
    * 创建一个 Symbol const say = symbol; say就是一个symbol，它表示一个独一无二的值。
    * 使用技巧
        * 创建私有属性和变量
        ```javascript
            // Person类的say方法只能在内部使用
            const say = Symbol();
            class Person  {
                [say] () {
                    console.log('hello')
                }
            }
        ```   
    * Symbol.iterator
        * 给对象添加Symbol.iterator使它可以通过for of遍历
        ```javascript
            const person = {
                name: '张三',
                age: 18
            }
            person[Symbol.iterator] = function() {                
                const arr = ['name','age'];
                const index = 0;
                return {
                    next(){
                        const done = index > arr.length - 1 ? true : false
                        const value = person[arr[index]]
                        index++
                        return {
                            done,
                            value
                        }
                    }
                }
            }
        ```
* 数据结构 map set
    * set 类似数组，里面的元素是不可重复的
        * 创建一个set 返回set
        ```javascript 
            // new Set 还可以用来转换数组
            // new Set 还可以用来转换字符串
            const set = new Set()
        ```
        * 在set中添加元素 返回set
        ```javascript
            const set = new Set()
            set.add(1)
        ```
        * 在set中删除元素 返回boolean
        ```javascript
            const set = new Set()
            set.add(1)
            set.delete(1)
        ```
        * 在set中查找某个元素 返回boolean
        ```javascript
            const set = new Set()
            set.add(1)
            set.has(1)
        ```
        * 清空set中的元素 无返回值
        ```javascript
            const set = new Set([1,2,3])
            set.clear()
        ```
        * 技巧
        * 数组去重 数组转set再转数组
        ```javascript
            let arr = [1,1,2,3,2,5,1]
            const set = new Set(arr1)
            const arr = [...set]
        ```
        * 技巧
        * 字符串去重 字符串转set, set转数组，数组转转字符串
        ```javascript
            let str = '12312455'
            const set = new Set(str)
            const arr = [...set]
            str = arr.join('')
        ```
        * Set可以用for of去遍历,也可以用set.forEach
        * 这是set原型上方法，不是数组的方法 

    * map 哈希表，存放键值对，对象的扩展，key不再只能是字符串了
        * 创建一个map
        ```javascript
            const map = new Map()
        ```    
        ```javascript
            const map = new Map([
                [1,1],
                [2,2],
                [3,1],
                [4,1],
            ])
        ```
        * 在map中添加元素
        ```javascript
            const map = new Map()
            map.set('key', 'value')
        ```
        * 在map中获取一个元素 返回key对应的value
        ```javascript
            const map = new Map()
            map.set(1, 123)
            map.get(1)
        ```
        * 在map中删除一个元素 返回boolean
        ```javascript
            const map = new Map()
            map.set(1,1)
            map.delete(1)
        ```
        * 判断map中有没有对应的元素 返回boolean
        ```javascript
            const map = new Map()
            map.set(1,1)
            map.has(1) 
        ```
        * 清空map 无返回值
        ```javascript
            const map = new Map([
                [1,1],
                [2,3],
            ])
            map.clear()
        ```
        * map 可以通过for of遍历，也可以通过map.forEach遍历
        * 注意：这是map原型上的方法，不是数组的方法
* Promise 对象
    * 创建 一个 Promise对象
    * new Promise 接受一个函数，这个函数有两个参数
        * 第一个参数 将Promise的状态由pending改为fulfilled
        * 第二个参数 将Promise的状态由pending改为rejected
    ```javascript
        const promise = new Promise(function(resolve,reject) {
            resolve(1)
        }) 
    ```
    * then方法接收两个函数
        * 第一个函数 处理fulfilled状态的Promise
        * 第二个函数 处理rejected状态的Promise
    * catch方法 用来捕获Promise在执行过程中的异常
    * 换句话说，promise在执行过程中发生了异常会调用catch方法
    * 技巧一
    * 控制promise的执行 用变量接收resolve方法，等到需要执行的时候，执行resolve方法
    ```javascript
        let resolvePromise;
        let promise = new Promise(function(resolve){
            resolvePromise = resolve
        })
        resolvePromise(1)
    ```
    * 技巧二
    * 把promise.then赋值给promise
    ```javascript
        let chain = [
            requestFulfilled, requestrejected,
            request, undefined, 
            responseFulfilled, responseRejected
        ]
        let promise = Promise.resolve(config)
        while(chain.length) {
            promise = promise.then(chain.unshift(), chain.unshift()) 
        }
    ```
    * 技巧三
    * Promise.then 中返回一个新的Promise,这样会根据新的状态去执行then方法里的回调函数
    ```javascript
        let promise = new Promise(function(resolve,reject){
            resolve(1)
        }).then(res=>{
            return Promise.reject(res)
        },res=>{

        }).then(res=>{

        },res=>{

        })
    ```
    * 注意 Promise是微任务，但是new Promise它是一个微任务
    * Promise.Prototype.all 方法
* 解构赋值 从数组和对象中提取元素，赋给变量，可以用...表示剩下的
    ```javascript
        let person = {
            username: '张三',
            age: 18,
            sex: '男'
        }
        let { username, ...other } = person
        let arr = [1, 23, 4, 6]
        let [a, b, ...c] = arr
    ```
    * 技巧一 交换变量
        ```javascript
            let x = 1;
            let y = 2;
            let [x, y] = [y, x]
        ```
    * 技巧二 数组的浅拷贝
        ```javascript
            let arr = [1,23,4]
            let newArr = [...arr]
            // let newArr = arr.slice()
        ```
    * 技巧三 将字符串转成数组
        ```javascript
            let str = 'hello world'
            let arr = [...str]
        ```
* rest 参数 ... 可以用在函数的参数上，接收多个参数，放在一个数组里
    * 扩展运算符 和 rest 参数
    * 一个用在函数接收的参数，一个用传递给函数的参数
    * rest参数用在形参，扩展运算符用在实参
    * rest参数将接收的参数放在一个数组中
    * 扩展运算符将数组解构成一个个的元素，将这些元素作为函数调用的参数
    ```javascript
        function say (...word) {
            console.log(...word)
        }
        say(...['hello', '你好'])
    ```


### 13.attribute和property的区别
### 14.let和const的区别
### 15.内存泄漏
### 16.数组的方法
* Array.isArray
* Array.prototype.map
* Array.prototype.forEach
* Array.prototype.filter
* Array.prototype.some
* Array.prototype.every
* Array.prototype.reduce

* Array.prototype.slice
* Array.prototype.includes
* Array.prototype.indexOf

* Array.prototype.join
* Array.prototype.split

* Array.prototype.push
* Array.prototype.pop
* Array.prototype.unshift
* Array.prototype.shift
* Array.prototype.sort
* Array.prototype.reverse
* Array.prototype.splice
    * start
    * end
    * 插入的元素  ...array

### 17.异步编程的实现方式
### 18.面向对象的编程思想
### 19.项目性能优化
### 20.什么是单线程，和异步的关系
### 21.什么是负载均衡
### 22.作用域链
* 函数内部使用一个变量，它会由内而外的去查找这个变量
    * 作用域链的特点
    * 函数外部无法访问函数内部的变量
    * 函数内部可以访问函数外部的变量
* 为了解决函数外部没办法访问函数内部的变量这个问题就出现了闭包 
### 23.什么是原型，原型链，继承
函数的prototype属性就是原型
对象的__proto__属性就是原型
```javascript
function Person({name, age} = {}) {
    this.name = name || '';
    this.age = age || '';
}
const person = new Person()
// person的原型Person.prototype
person.__proto__ === Person.prototype
// person的原型的原型是Object.prototype
perso.__proto__.__proto__ === Object.prototype
// Object原型的原型是null
perso.__proto__.__proto__.__proto__ === null
```
### 24.JS的垃圾回收机制
* 我们在创建变量时，都是需要占用内存的，如果变量一直都得不到释放，那么就会十分占内存
* 释放创建的变量，把内存空出来的过程就是垃圾回收机制
* 引用计数算法 记录变量的引用次数，释放所有引用为0的
* 标记清除算法 给所有的变量打上垃圾的标志0，遍历所有变量，不是垃圾的变量打上标志1，清除所有的变量
    * 全局变量会在浏览器关闭被释放，


### 25.逐渐增强和优雅降级
### 26.数组的深拷贝和浅拷贝
* 浅拷贝
* 如果是值类型就拷贝值，如果是引用类型就拷贝地址
    * for while循环
    * slice
    * concat
    * 扩展运算符
* 深拷贝
* 只拷贝值
    lodash deepClone
    JSON.parse(JSON.Stringify())
### 27.对象的深拷贝和浅拷贝
* 浅拷贝
    * Object.assign
    * 扩展运算符
* 深拷贝
    lodash deepClone
    JSON.parse(JSON.Stringify())
* JSON.parse(JSON.Stringify()) 的问题
    * 无法处理环引用
    * null和undefined会转成空字符串