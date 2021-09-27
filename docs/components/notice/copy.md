
# Copy组件
Copy 复制文本
## 基础用法

<script>
    module.exports = {
        methods: {
            demo1(e) {
                console.log(e)
                this.$message.success('复制成功回调');
            },
            demo3() {
                this.$message.success('复制成功回调',function() {
                    alert('触发回调');
                }, 3000);
            },
        }
  };
</script>

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <p>这是一个文本可以提供复制</p>
        <x-copy
            kind="text"
            value="这是一个文本可以提供复制"
            @success="demo1"
        >
            <x-button status="primary"> 复制单个文本 </x-button>
        </x-copy>
    </div>
</template>

:::

使用kind来定义传入得为文本类型(text),具体dom选中元素(target) value 定义具体传入得值

::: slot highlight

```html
<div>
    <p>这是一个文本可以提供复制</p>
    <x-copy
        kind="text"
        value="这是一个文本可以提供复制"
        @success="demo1"
    >
        <x-button status="primary"> 复制单个文本 </x-button>
    </x-copy>
    <script>
        module.exports = {
            methods: {
                demo1(e) {
                    console.log(e)
                    this.$message.success('复制成功回调');
                }
            }
    };
    </script>
</div>
```
:::
</demo-block-demo-block>

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
         <div class="copy-text">
            <p>文本内容1</p>
            <p>文本内容2</p>
            <p>文本内容3</p>
        </div>
        <x-copy
            kind="target"
            value=".copy-text"
            @success="demo1"
        >
            <x-button status="primary"> 复制单个文本 </x-button>
        </x-copy>
    </div>
</template>

:::

使用kind来定义传入得为文本类型(text),具体dom选中元素(target) value 定义具体传入得值

::: slot highlight

```html
<div>
    <div class="copy-text">
        <p>文本内容1</p>
        <p>文本内容2</p>
        <p>文本内容3</p>
    </div>
    <x-copy
        kind="target"
        value=".copy-text"
        @success="demo1"
    >
        <x-button status="primary"> 复制多个内容 </x-button>
    </x-copy>
    <script>
        module.exports = {
            methods: {
                demo1(e) {
                    console.log(e)
                    e.clearSelection();
                    this.$message.success('复制成功回调');
                }
            }
    };
    </script>
</div>
```
:::
</demo-block-demo-block>

### `Copy`参数列表

| 参数      | 说明                             | 类型      | 可选值       | 默认值 |
| -------- | -------------------------------- | -------- | ----------- | ----- |
| kind     | 目标的类型         | string   | (text,target) | - |
| value    | 目标的值         |  string  | - | - |


### `Message`方法
| 方法名称   | 说明                             | 参数  |
| -------  | -------------------------------- | -------- |
| success  | 成功消息                          | (event: Event)         |
| error    | 出错消息                          | (event: Event)         |


