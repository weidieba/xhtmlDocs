import Vue from 'vue';

import hljs from 'highlight.js' //引入高亮js
import 'highlight.js/styles/googlecode.css' //引入高亮js样式文件

//正常情况引入poly-ui要根据目录../../一层一层去引入的，
//这里为了方便在poly-ui文件夹根目录下npm link一下，把poly-ui添加到本地全局，
//注意要以package.json里的name名字为准
//然后在poly-ui-doc文件夹下npm link poly-ui一下，把本地全局的poly-ui引入到文档项目下
//成功之后在poly-ui-doc下的nodemodule下就能看到这个poly-ui文件夹了(实际上是个链接，每次poly-ui文件夹改动了，这里的也会改动)
//这样就可以以下面一行的方式引用了
 // 要编写对应的文档的包
import xhtmlUi from 'xhtml-ui'
import 'xhtml-ui/lib/xhtml-ui.css'

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
  siteData
}) => {
    Vue.use(xhtmlUi) // 设置为全局组件
}
