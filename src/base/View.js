import $ from 'jquery'

class View {
    constructor({el, html, render}) { // 解构
        this.el = $(el)
        this.html = html
        this.render = render
    }
}

export default View