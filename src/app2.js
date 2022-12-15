import './app2.css'
import $ from 'jquery'

const html = `
 <section class="app app2">
      <ol class="tab-bar">
        <li class="tab1 ">tab1</li>
        <li class="tab2">tab2</li>
      </ol>
      <ol class="tab-content">
        <li class="active">content1</li>
        <li>content2</li>
      </ol>
    </section>
`
const $element = $(html).appendTo($('body>.container'))

const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')
const localKey = 'app2-index'
const index = localStorage.getItem(localKey) || 0




$tabBar.on('click', 'li', (e) => {
  const $tab = $(e.target)
  // tab栏切换
  $tab.addClass('active').siblings().removeClass('active')
  const index = $tab.index()
  localStorage.setItem(localKey, index)
  // 内容切换
  $tabContent
    .children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})

$tabBar.children().eq(index).trigger('click') // 注意这句话
