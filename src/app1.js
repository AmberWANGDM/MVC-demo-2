import $ from 'jquery'
import './app1.css'

/**
 * 所有数据相关都放在m
 */


// 初始化html
const html = `
  <section class="app app1">
      <div class="result">计算结果: <span id="resultNum">1</span></div>
      <button class="btn add">加1</button>
      <button class="btn sub">减1</button>
      <button class="btn mul">乘2</button>
      <button class="btn div">除2</button>
  </section>
`
const $element = $(html).appendTo($('body>.container'))

// 寻找重要元素
const $button1 = $('.add')
const $button2 = $('.sub')
const $button3 = $('.mul')
const $button4 = $('.div')
const $number = $('#resultNum')

// 初始化数据
const n = localStorage.getItem('res')

// 将数据渲染到页面
$number.text(n || 100)

// 绑定鼠标事件
$button1.on('click', () => {
  let n = parseInt($number.text())
  n += 1
  localStorage.setItem('res', n)
  $number.text(n)
})
$button2.on('click', () => {
  let n = parseInt($number.text())
  n -= 1
  localStorage.setItem('res', n)
  $number.text(n)
})
$button3.on('click', () => {
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem('res', n)
  $number.text(n)
})
$button4.on('click', () => {
  let n = parseInt($number.text())
  n /= 2
  localStorage.setItem('res', n)
  $number.text(n)
})
