import $ from 'jquery'
import './app1.css'

// ----------------- 数据相关 m -----------------
const m = {
  // 数据
  data:{
    // 初始化数据
     n : parseInt(localStorage.getItem('res'))
  }
}

// ----------------- 视图相关 v -----------------
const v ={
  // 容器
  el:null,
  // html字符串
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
    v.el = $(container)
    v.render()
  },
  // 渲染 & 更新页面
  render(data){
    if(v.el.children.length !== 0){
      // 清空当前html,重新渲染
      v.el.empty()
    }
    $(v.html.replace('{{n}}',data)).appendTo(v.el)
  }
}
// ----------------- 其它 c -----------------
const c = {
  // 初始化, 形参为容器
  init(container){
    v.init(container)
    v.render(m.data.n)
    c.bindEvents()
  },
  // 绑定事件
  bindEvents(){
    // 绑定鼠标事件, 如果绑定在按钮上,更新页面后事件会失效,需要绑在container上
    v.el.on('click','.add', () => {
      m.data.n += 1
      v.render(m.data.n)
    })
    v.el.on('click','.sub', () => {
      m.data.n -= 1
      v.render(m.data.n)
    })
    v.el.on('click','.mul', () => {
      m.data.n *= 2
      v.render(m.data.n)
    })
    v.el.on('click','.div', () => {
      m.data.n /= 2
      v.render(m.data.n)
    })
  }
}

export default c









