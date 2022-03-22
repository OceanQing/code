## 高级
### 1.JS的数据类型
### 2.栈和堆的存储机制有什么不同
堆 一种数据结构
特点 非线性数据结构 堆总是一个完全二叉树
堆又分为大顶堆和小顶堆
根节点为最大值称为大顶堆
根结点为最小值称为小顶堆
完全二叉树的五种形式
空 根节点 根节点左节点 根节点左节点右节点 根节点左节点右节点
栈 一种数据结构
特点 线性数据结构 后入先出
### 3.什么是事件
浏览器会监视用户的行为，当用户点击了下鼠标，或敲了下键盘就会产生事件。
dom事件分为两种：事件捕获和事件冒泡
事件捕获：网景公司提出的事件流，由外到内，从事件发生的顶点开始，往下级查找，直到找到目标元素
事件冒泡：IE提出的事件流，从具体的目标节点元素触发，逐渐向下传递，直到根节点
事件流就是，页面接受事件的先后顺序。
自定义事件，自己定义事件和事件处理函数
 
### 4.什么是事件委托
事件委托就是利用事件冒泡，把子元素的事件绑定到父元素上，如果子元素阻止了事件冒泡，那么委托就没法实现了
addEventListener的三个参数
事件名
事件处理函数
useCapture：true 事件捕获 false 事件冒泡
减少了事件绑定，提高了性能，减少了内存使用

### 5.放抖和节流
### 6.什么是深拷贝，什么是浅拷贝
### 7.数组的方法
### 8.改变数组本身的api
### 9.数组去重
### 10.数组扁平
### 11.数组排序
### 12.call，apply，bind
### 13.arguments
### 14.柯里化函数
### 15.new的原理
### 16.封装一个通用的事件绑定函数
### 17.eventloop的理解
### 18.如何让(a==1&&a==2&&a==3)的值为true
### 19. 0.1 + 0.2 !== 0.3,如何让其相等
### 20.require和import的区别和使用
### 21.for in 和 for of的区别
### 22.谈谈你对promise Generator async/await的理解
### 23.set和map数据结构有哪些常用的属性和方法
### 24.谈谈你对模块化开发的理解
### 25.JS的几种模块规范 