import $ from 'jquery'
import './app1.css'

// ----------------- 数据相关 m -----------------
const m = {
  data:{
    // 初始化数据
     n : parseInt(localStorage.getItem('res'))
  }
}

// ----------------- 视图相关 v -----------------
const v ={
  el:null,
  // 注意这里要用div包裹
  html:`
    <div>  
        <div class="result">计算结果: <span id="resultNum">{{n}}</span></div>
        <button class="btn add">加1</button>
        <button class="btn sub">减1</button>
        <button class="btn mul">乘2</button>
        <button class="btn div">除2</button>
    </div>
  `,
  // 初始化页面 & 保存container
  init(container){
    v.container = $(container)
    v.render()
  },
  // 渲染 & 更新页面
  render(){
    if(v.el===null){
      // 初次渲染页面
      v.el=$(v.html.replace('{{n}}',m.data.n.toString())).appendTo(v.container)
    }else {
      // 更新页面
      const newEl = $(v.html.replace('{{n}}',m.data.n.toString()))
      v.el.replaceWith(newEl) // 新对象移到当前位置, 但el指向被替代的那个对象, 需要重新赋值
      v.el = newEl
    }
  }
}
// ----------------- 其它 c -----------------
const c = {
  init(container){
    v.init(container)
    c.ui={
      // 需要的重要元素
      button1 : $('.add'),
      button2 : $('.sub'),
      button3:  $('.mul'),
      button4:  $('.div'),
      number: $('#resultNum')
    }
    c.bindEvents()
  },
  bindEvents(){
    // 绑定鼠标事件, 如果绑定在按钮上,更新页面后事件会失效,需要绑在container上
    v.container.on('click','.add', () => {
      m.data.n += 1
      v.render()
    })
    v.container.on('click','.sub', () => {
      m.data.n -= 1
      v.render()
    })
    v.container.on('click','.mul', () => {
      m.data.n *= 2
      v.render()
    })
    v.container.on('click','.div', () => {
      m.data.n /= 2
      v.render()
    })
  }
}

export default c









