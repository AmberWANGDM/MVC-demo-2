import $ from 'jquery'
import './app3.css'

const html = `
  <section class="app app3">
      鼠标点击,方块移动
      <div class="box"></div>
    </section>
`
const $element = $(html).appendTo($('body>.container'))

const $box = $('.box')
const localKey = 'app3-new'
const ifNew = localStorage.getItem(localKey) === 'yes'

// toggleClass可以接收第二个参数,如果这个参数为true,就加new
$box.toggleClass('new', ifNew)

$box.on('click', () => {
  if ($box.hasClass('new')) {
    $box.removeClass('new')
    localStorage.setItem(localKey, 'no')
  } else {
    $box.addClass('new')
    localStorage.setItem(localKey, 'yes')
  }
})
