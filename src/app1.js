import $ from 'jquery'
import './app1.css'
import Model from "./base/Model";
import View from "./base/View";
import Vue from 'vue'

// const m = new Model({
//     data: {
//         n: parseFloat(localStorage.getItem('res'))
//     },
//     update: function (data) {
//         Object.assign(m.data, data)
//         m.trigger('m:update') // 触发事件
//         localStorage.setItem('res', m.data.n)
//     }
// })


const init = (el) => {
    new Vue({
        el: el,
        data: {n: parseFloat(localStorage.getItem('res'))},
        template: `
          <section class="app app1">
          <div class="result">计算结果: <span id="resultNum">{{ n }}</span></div>
          <button class="btn add" @click="add">加1</button>
          <button class="btn sub" @click="sub">减1</button>
          <button class="btn mul" @click="mul">乘2</button>
          <button class="btn div" @click="div">除2</button>
          </section>
        `,
        methods: {
            add() {
                this.n += 1
            },
            sub() {
                this.n -= 1
            },
            mul() {
                this.n *= 2
            },
            div() {
                this.n /= 2
            }
        },
        watch: {
            n() {
                localStorage.setItem('res', this.n)
            }
        }
    })
    // return
    // new View({
    //     // 初始化, 形参为容器
    //     el: el,
    //     data: m.data,
    //     html: `
    //         <div>
    //             <div class="result">计算结果: <span id="resultNum">{{n}}</span></div>
    //             <button class="btn add">加1</button>
    //             <button class="btn sub">减1</button>
    //             <button class="btn mul">乘2</button>
    //             <button class="btn div">除2</button>
    //         </div>
    //      `,
    //     render(data) {
    //         const n = data.n
    //         if (this.el.children.length !== 0) {
    //             // 清空当前html,重新渲染
    //             this.el.empty()
    //         }
    //         $(this.html.replace('{{n}}', n)).appendTo(this.el)
    //     },
    //     events: {
    //         'click .add': 'add',
    //         'click .sub': 'sub',
    //         'click .mul': 'mul',
    //         'click .div': 'div'
    //     },
    //     add() {
    //         m.update({n: m.data.n + 1})
    //     },
    //     sub() {
    //         m.update({n: m.data.n - 1})
    //     },
    //     mul() {
    //         m.update({n: m.data.n * 2})
    //     },
    //     div() {
    //         m.update({n: m.data.n / 2})
    //     }
    //
    // })
}
export default init









