import Vue from 'vue';
import hljs from 'highlight.js' //引入高亮js
import 'highlight.js/styles/vs2015.css' //引入高亮js样式文件
import 'xhtml-ui/lib/xhtml-ui.css'
// 导入默认base样式
import './public/base.css'

// 写了一个高亮指令，可以去解析pre code里面的标签，添加高亮
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue,
  option,
  router,
  siteData,
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  if(!isServer){
    import('xhtml-ui/lib/xhtml-ui.umd.min.js').then(module => {
      Vue.use(module.default)
    })    
  }
    // Vue.use(xhtmlUi) // 设置为全局组件
}
