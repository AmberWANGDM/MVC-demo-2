import $ from 'jquery'
import './app1.css'
const eventBus = $(window) // api: on trigger

// ----------------- 数据相关 m -----------------
const m = {
  // 数据
  data:{
    // 初始化数据
     n : parseInt(localStorage.getItem('res'))
  },
  create(){},
  delete(){},
  update(data){
    Object.assign(m.data,data)
    eventBus.trigger('m:update') // 触发事件
  },
  get(){}
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
    c.autoBindEvents()
    eventBus.on('m:update',()=>{ // 监听事件
      v.render(m.data.n)
    })
  },
  events:{
    'click .add':'add',
    'click .sub':'sub',
    'click .mul':'mul',
    'click .div':'div'
  },
  add(){
    m.update({n:m.data.n + 1})
  },
  sub(){
    m.update({n:m.data.n - 1})
  },
  mul(){
    m.update({n:m.data.n*2})
  },
  div(){
    m.update({n:m.data.n/2})
  }
  ,
  autoBindEvents(){
    for(let key in c.events){
      const event = key.split(' ')[0]
      const element = key.split(' ')[1]
      v.el.on(event,element,c[c.events[key]])
    }
  },

}

export default c









