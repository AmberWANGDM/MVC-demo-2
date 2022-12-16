import './app2.css'
import $ from 'jquery'

const eventBus = $(window) // api: on trigger
const localKey = 'app2-index'
const m = {
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    create() {
    },
    delete() {
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:update') // 触发事件
        localStorage.setItem(localKey, m.data.index)
    },
    get() {
    }
}

const v = {
    // 容器
    el: null,
    // html字符串
    html: (index) => {
        return `
        <div>
          <ol class="tab-bar">
            <li class="${index === 0 ? 'active' : ''}" data-index="0">tab1</li>
            <li class="${index === 1 ? 'active' : ''}" data-index="1">tab2</li>
          </ol>
          <ol class="tab-content">
            <li class="${index === 0 ? 'active' : ''}">content1</li>
            <li class="${index === 1 ? 'active' : ''}">content2</li>
          </ol>
        </div>
        `
    },
    // 初始化页面 & 保存container
    init(container) {
        v.el = $(container)
        v.render()
    },
    // 渲染 & 更新页面
    render() {
        if (v.el.children.length !== 0) {
            // 清空当前html,重新渲染
            v.el.empty()
        }
        $(v.html(m.data.index)).appendTo(v.el)
    }
}


const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')

const c2 = {
    // 初始化, 形参为容器
    init(container) {
        v.init(container)
        v.render(m.data.index)
        c2.autoBindEvents()
        eventBus.on('m:update', () => { // 监听事件
            v.render(m.data.index)
        })
    },
    events: {
        'click .tab-bar>li': 'x',
    },
    x(e) {
        const index = parseInt(e.currentTarget.dataset.index)
        m.update({index: index})
    },
    autoBindEvents() {
        for (let key in c2.events) {
            const event = key.split(' ')[0]
            const element = key.split(' ')[1]
            v.el.on(event, element, c2[c2.events[key]])
        }
    },
}


export default c2
