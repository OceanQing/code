### 1.vue的特点
* 单页面
    * 页面只会刷新一次，路由的改变只会刷新对应的组件
* 数据和视图相互绑定
    * 数据改变，视图会跟着发生变化
* 组件化
    * 可以封装全局组件，在不同的路由中复用
### 2.vue父子组件传递数据
* 父传子 
    * props
    * 通过ref调用子组件的函数，把自身传给子组件
    * provide inject provide传递自身，子组件通过inject接收
    * vuex 把想要传递的数据放到vuex中，子组件通过vuex获取
* 子传父
    * $emit 把数据传递给父组件
    * hooks 
### 3.v-show和v-if的不同点
* v-show 设置元素的display属性，控制元素显示隐藏
* v-if 根据条件 生成元素或移除元素
### 4.如何让css只在当前组件生效
scoped
### 5.keep-alive的作用
### 6.如何获取dom
* ref
* $nextTick 方法
    * $nextTick 就是promise，如果没有promise，vue会使用setTimeout去实现
### 7.vue的几种指令
v-if
v-show
v-for
v-model
v-bind
v-on
v-once
### 8.vue-loader是什么
将.vue文件转成对象
### 9.为什么要用key
* vue 中有一个方法 isSameNode 中使用到key,vnode的key值相同是判断是否是同一个vnode的条件之一
### 10.v-on可以监听多个方法吗
* 可以
    * vue是用数组存放函数的，所以可以是多个
### 11.$nextTick
* 它是一个微任务，vue渲染是同步的，所以它会在vue渲染完成后才执行，这样就可以拿到真实dom了
### 12.vue组件中data为什么要是一个函数
* 函数返回一个对象的形式可以保证每个组件里的data是不同的对象，即使它被复用了
### 13.vue双向数据绑定是如何实现的、
* 通过数据劫持加观察者模式实现的
* 通过definePrototype对data中的属性进行重新定义，（给它添加get和set方法），执行set方法会触发更新视图的方法。
* 每个组件会有一个对应的watcher，watcher上绑定了更新组件的方法
### 14.单页面和多页面应用的区别及缺点
* 单页面没有真实的路由，首屏需要加载的资源多，首屏响应就会缓慢
* 多页面首屏加载的资源少，首屏展示很快
### 15.vue项目中为什么要在列表组件中写key，作用是什么
### 16.父组件和子组件生命周期钩子函数执行顺序
* 组件渲染
    * 父beforeCreate 父created 父beforeMount 子beforeCreate 子created 子beforeMount 子mounted 父mounted  
* 组件更新
    * 父beforeUpdate 子beforeUpdate 子updated 父updated 
* 组件销毁
    * 父beforeDestroy 子beforeDestroy 子destroyed 父destroyed
### 17.nextTick
### 18.vue更新数组时触发视图更新的方法
pop push unshift shift sort reverse splice
### 19.vue生命周期
beforeCreate created
beforeMount mounted
beforeUpdate updated
beforeDestroy destroyed
### 20.第一次页面加载会触发哪几个钩子
beforeCreate created
beforeMount mounted
### 21.vue获取数据一般在哪个周期函数
### 22.created和mounted的区别
### 23.vue生命周期的理解
vue在组件的不同阶段会执行callhook方法，这样用户就可以在vue组件不同阶段执行自己想要的操作
### 24.vuex 
### 25.v-for和v-if的优先级
### 26.vue中如何使用event对象
e.target.event $event
### 27.组件传值有哪些方法
### 28.vue子组件调用父组件的方法
### 29.vue-router
### 30.computed和watch的区别
### 31.如何解决数据层级结构太深的问题
### 32.vue常用指令
v-model v-if v-show v-on v-once v-html v-text
### 33.router和$route的区别
### 34.vue单项数据流
### 35.vuex页面刷新数据丢失

### vue首次渲染

* vue template 转成ast语法，ast语法再转成 render函数 执行render函数会生成vnode，将vnode和旧的vnode进行对比 生成真实dom，挂载到父元素上