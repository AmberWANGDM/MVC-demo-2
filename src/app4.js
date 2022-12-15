import './app4.css'
import $ from 'jquery'

const html = `
    <section class="app app4">
      点击小球,实现渐变
      <div class="circle"></div>
    </section>
`
const $element = $(html).appendTo($('body>.container'))

const $circle = $('.circle')

$circle.on('click', () => {
  $circle.toggleClass('active')
})
