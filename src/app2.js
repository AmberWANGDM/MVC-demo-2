import './app2.css'
import $ from 'jquery'
import View from "./base/View";
import Model from "./base/Model";
import Vue from 'vue'

// const localKey = 'app2-index'
// const m = new Model({
//     data: {
//         index: parseInt(localStorage.getItem(localKey)) || 0
//     },
//     update(data) {
//         Object.assign(m.data, data)
//         m.trigger('m:update') // 触发事件
//         localStorage.setItem(localKey, m.data.index)
//     }
// })


const init = (el) => {
    new Vue({
        el: el,
        data: {index: 0},
        template: `
          <section class="app app2">
          <ol class="tab-bar">
            <li :class="index === 0 ? 'active' : ''" @click="index=0">tab1</li>
            <li :class="index === 1 ? 'active' : ''" @click="index=1">tab2</li>
          </ol>
          <ol class="tab-content">
            <li :class="index === 0 ? 'active' : ''">content1</li>
            <li :class="index === 1 ? 'active' : ''">content2</li>
          </ol>
          </section>
        `
    })
    // return
    // new View({
    //     el: el,
    //     html: (index) => {
    //         return `
    //     <div>
    //       <ol class="tab-bar">
    //         <li class="${index === 0 ? 'active' : ''}" data-index="0">tab1</li>
    //         <li class="${index === 1 ? 'active' : ''}" data-index="1">tab2</li>
    //       </ol>
    //       <ol class="tab-content">
    //         <li class="${index === 0 ? 'active' : ''}">content1</li>
    //         <li class="${index === 1 ? 'active' : ''}">content2</li>
    //       </ol>
    //     </div>
    //     `
    //     },
    //     data: m.data,
    //     render(data) {
    //         const index = data.index
    //         if (this.el.children.length !== 0) {
    //             // 清空当前html,重新渲染
    //             this.el.empty()
    //         }
    //         $(this.html(index)).appendTo(this.el)
    //     },
    //     events: {
    //         'click .tab-bar>li': 'x',
    //     },
    //     x(e) {
    //         const index = parseInt(e.currentTarget.dataset.index)
    //         m.update({index: index})
    //     },
    // })
}


export default init
