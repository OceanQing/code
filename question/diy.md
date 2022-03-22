## 数组展开
#### 方法一
```javascript
function flat (arr) {
    return arr.toString().split(',')
}
```
#### 方法二
```javascript
function flat (arr, result = []) {
    for(let i = 0;i<arr.length;i++) {
        const el = arr[i]
        if (Array.isArray(el)) {
            flat(el)
        } else {
            result.push(el)
        }
    }
    return result
}
```
#### 方法三
```javascript
function flat (arr) {
  while (arr.some(el => Array.isArray(el))) {
    // arr = [].concat.apply([], arr)
    // arr = [].concat.call([], ...arr)
    arr = [].concat(...arr)
  }
  return arr
}
```

## 数组反转
#### 方法一
```javascript
function reverse(arr) {
    return arr.reverse()
}
```
#### 方法二
```javascript
function reverse(arr, result = []) {
    const len = arr.length
    for(let i = 0;i < len;i++) {
        const e = arr[len - i - 1]
        result.push(e)
    }
    return result
}
```
#### 方法三
```javascript
function reverse(arr) {
    const len = arr.length
    for(let i = 0;i < len / 2;i++) {
        [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]]
    }
    return arr
}
```
#### 方法四
```javascript
function reverse (arr) {
  const len = arr.length
  let [l, r] = [0, len - 1]
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }
  return arr
}
```
## 数组去重
#### 方法一
```javascript
function unique (arr, result = []) {
  const len = arr.length
  for (let i = 0;i < len;i++) {
    const cur = arr[i]
    const bool = !result.includes(cur)
    if (bool) {
      result.push(cur)
    }
  }
  return result
}
```
#### 方法二
```javascript
function unique (arr) {
  const obj = {}
  const len = arr.length
  for (let i = 0;i < len;i++) {
    const cur = arr[i]
    obj[cur] = 1
  }
  return Object.keys(obj).map(el => Number(el))
}
```
#### 方法三
```javascript
function unique (arr) {
    return [... new Set(arr)]
}
```
## 数组排序
#### 方法一 选择排序
```javascript
function sort (arr) {
  const len = arr.length
  for (let i = 0;i < len;i++) {
    for (let j = i + 1;j < len;j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
```
#### 方法二 冒泡排序
```javascript
function sort (arr) {
  const len = arr.length
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < len - i;j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
```

## 字符串反转
#### 方法一
```javascript
function reverse (str, result = '') {
  return result.concat(...[...str].reverse())
}
```
#### 方法二
```javascript
function reverse (str) {
  return str.split('').reverse().join('')
}
```

#### 方法三
```javascript
function reverse(str, result = '') {
    const len = str.length
    for (let i = 0; i < len; i++) {
        const cur = str.charAt(len - 1 - i)
        result += cur
    }
    return result
}
```
## 防抖函数
```javascript
/**
 * @name: debounce
 * @description: 将回调函数放在定时器中执行，如有有定时器了，生成一个新的定时器
 * @param fn 回调函数
 * @param delay 延迟时间
 * @param args 回调函数的参数
 * @return Function
 */
function debounce (fn, delay =300, ...args) {
    let timer 
    return function () {
        timer && clearInterval(timer)
        timer = setTimeout(function() {
            fn(...args)
        }, delay)
    }
}
```
## 节流函数
```javascript
/**
 * @name: throttle
 * @description: 将回调函数放在定时器中执行，如有有定时器了，等定时器执行完再创建下一个定时器
 * @param fn 回调函数
 * @param delay 延迟时间
 * @param args 回调函数的参数
 * @return Function
 */
function throttle (fn, delay, ...args) {
  let timer
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(function () {
      fn(...args)
      clearInterval(timer)
      timer = null
    }, delay)
  }
}
```
## setTimeout实现setInterval
```javascript
/**
 * @name: mySetInterval
 * @description: 利用递归函数实现 执行setTimeout 会生成一下setTimeout 利用闭包 返回定时器id，可以实现清除定时器
 * @param fn 回调函数
 * @param delay 延迟时间
 * @param args 回调函数的参数
 * @return Function
 */
function mySetInterval (fn, delay, ...args) {
  let timer
  function interval () {
    fn(...args)
    timer = setTimeout(interval, delay)
  }
  timer = setTimeout(interval, 0)
  return function cancel () {
    clearTimeout(timer)
  }
}
```
## 实现发布订阅模式
```javascript
class EventBus {
  constructor() {
    this.events = {}
  }
  on (name, fn) {
    if (this.events[name]) {
      if (!this.events[name].some(el => el === fn)) {
        this.events[name].push(fn)
      }
    } else {
      this.events[name] = [fn]
    }
  }
  emit (name, ...args) {
    this.events[name].forEach(fn => {
      fn(...args)
    })
  }
  off (name, fn) {
    this.events[name] = this.events[name].filter(el => {
      return el.name !== fn.name
    })
  }
  once (name, fn) {
    const that = this
    function f (...args) {
      fn(...args)
      that.off(name, f)
    }
    this.on(name, f)
  }
}
```
#### 手写call
```javascript
/**
 * @name: call
 * @description: Function.prototype.call的this指向的就是调用它的方法 把它添加到指定的this上
 * @param this
 * @param ...args
 * @return 
 */
Function.prototype.call = function (that, ...args) {
  that = that || window
  that.fn = this
  return that.fn(...args)
}
```
#### 手写apply
```javascript
/**
 * @name: apply
 * @description: Function.prototype.call的this指向的就是调用它的方法 把它添加到指定的this上
 * @param this
 * @param Array
 * @return 
 */
Function.prototype.apply = function (that, args) {
  that = that || window
  that.fn = this
  return that.fn(...args)
}
```
#### 手写bind
```javascript
/**
 * @name: bind
 * @description: Function.prototype.call的this指向的就是调用它的方法 把它添加到指定的this上
 * @param this
 * @param ...args
 * @return Function
 */
Function.prototype.bind = function (that, ...args) {
  that = that || window
  that.fn = this
  return function () {
    return that.fn(...args)
  }
}
```