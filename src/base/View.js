import $ from 'jquery'
import EventBus from "./EventBus";

class View extends EventBus {
    // constructor({el, html, render, data, eventBus, events}) { // 解构
    constructor(options) {
        super()
        Object.assign(this, options)
        this.el = $(this.el) // jQuery对象覆盖原生DOM
        // 渲染
        this.render(this.data)
        this.autoBindEvents()
        this.on('m:update', () => { //  监听事件
            this.render(this.data)
        })
    }

    autoBindEvents() {
        for (let key in this.events) {
            const event = key.split(' ')[0]
            const element = key.split(' ')[1]
            this.el.on(event, element, this[this.events[key]])
        }
    }

}

export default View