<script>
    module.exports = {
        data() {
            return {
                visible: false
            };
        }
    };
</script>
<style>
.theme-default-content pre code {color: #000000!important;}
</style>


### npm安装

#### 安装命令
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。
```
npm install xhtml-ui
```


#### XHTML 1.x 版本
在main.js引入 js 和 css 文件即可开始使用。
```html
<!-- 组件库 -->
import xhtmlUi from 'xhtml-ui'
<!-- 引入css样式 -->
import 'xhtml-ui/lib/xhtml-ui.css'
```

#### Hello World
通过 npm 的方式我们可以很容易地使用 XHTML 写出一个 Hello world 页面。
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <div id="app">
        <x-button @click="visible = false" :loading="visible">按钮</v-button>
    </div>
    <script>
    new Vue({
        el: '#app',
        data: function () {
            return {
                visible: true
            };
        }
    })
    </script>
</body>
</html>
```
