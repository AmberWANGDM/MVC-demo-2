import $ from 'jquery'
import './app1.css'
import Model from "./base/Model";
import View from "./base/View";

const eventBus = $(window) // api: on trigger

// ----------------- 数据相关 m -----------------
const m = new Model({
    data: {
        // 初始化数据
        n: parseInt(localStorage.getItem('res'))
    },
    update: function (data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:update') // 触发事件
        localStorage.setItem('res', m.data.n)
    }
})
// ----------------- 视图相关 v -----------------

// ----------------- 其它 c -----------------
const c = {
    v: null,
    initV() {
        c.v = new View({
            el: c.container,
            html: `
            <div>  
                <div class="result">计算结果: <span id="resultNum">{{n}}</span></div>
                <button class="btn add">加1</button>
                <button class="btn sub">减1</button>
                <button class="btn mul">乘2</button>
                <button class="btn div">除2</button>
            </div>
          `,
            render(data) {
                if (c.v.el.children.length !== 0) {
                    // 清空当前html,重新渲染
                    c.v.el.empty()
                }
                $(c.v.html.replace('{{n}}', data)).appendTo(c.v.el)
            }
        })
    },
    // 初始化, 形参为容器
    init(container) {
        c.container = container
        c.initV()
        c.v.render(m.data.n)
        c.autoBindEvents()
        eventBus.on('m:update', () => { //  监听事件
            c.v.render(m.data.n)
        })
    },
    events: {
        'click .add': 'add',
        'click .sub': 'sub',
        'click .mul': 'mul',
        'click .div': 'div'
    },
    add() {
        m.update({n: m.data.n + 1})
    },
    sub() {
        m.update({n: m.data.n - 1})
    },
    mul() {
        m.update({n: m.data.n * 2})
    },
    div() {
        m.update({n: m.data.n / 2})
    }
    ,
    autoBindEvents() {
        for (let key in c.events) {
            const event = key.split(' ')[0]
            const element = key.split(' ')[1]
            c.v.el.on(event, element, c[c.events[key]])
        }
    },

}

export default c









