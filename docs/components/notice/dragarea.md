
# dragarea拖拽区
dragarea拖拽区可以针对元素进行拖拽替换位置

## 基础用法

<script>
    module.exports = {
        data(){
            return {
                SEs: [
                    {text: '星期一', id: 1}, 
                    {text: '星期二', id: 2}, 
                    {text: '星期三', id: 3}, 
                    {text: '星期四', id: 4},
                    {text: '星期五', id: 5},
                    {text: '星期六', id: 4},
                    {text: '星期天', id: 4}
                ],
            }
        },
        methods: {
            handleDrap(value) {
                console.log(value)
            }
        }
  };
</script>
<style>
.drag-test  {
    width: 400px;
    height: 200px;
    background: #dadee7;
    overflow-y: scroll;
}
.x-drag-item {
    width: 320px;
    padding: 0 10px;
    line-height: 30px;
    background-color: #fff;
    margin: 10px;
}
</style>
<demo-block-demo-block>
::: slot source
<template>
    <!-- 正常使用 -->
    <x-drap-wrap
        :option="SEs"
        class="drag-test"
        @change="handleDrap"
    >
        <x-drap-item
            v-for="(item, index) in SEs"
            :key="index"
        >
            <div>{{ item.text }}</div>
        </x-drap-item>
    </x-drap-wrap>
</template>

:::

dragarea拖拽区可以针对元素进行拖拽替换位置

::: slot highlight

```html
<div>
    <x-drap-wrap
        :option="SEs"
        class="drag-test"
        @change="handleDrap"
    >
        <x-drap-item
            v-for="(item, index) in SEs"
            :key="index"
        >
            <div>{{ item.text }}</div>
        </x-drap-item>
    </x-drap-wrap>
    <script>
        module.exports = {
            data(){
                return {
                    SEs: [
                        {text: '星期一', id: 1}, 
                        {text: '星期二', id: 2}, 
                        {text: '星期三', id: 3}, 
                        {text: '星期四', id: 4},
                        {text: '星期五', id: 5},
                        {text: '星期六', id: 4},
                        {text: '星期天', id: 4}
                    ],
                }
            },
            methods: {
                handleDrap(value) {
                    console.log(value)
                }
            },
    };
    </script>
</div>
```
:::
</demo-block-demo-block>


### `dragarea`的参数

| 类型 | 参数      | 说明                             |
| --- | -------- | -------------------------------- |
| option | Array   | 原始数据，每一项对应一个drag-item                  |
|  |   |  |

### `dragarea`组件的自定义事件

| 事件名称  | 说明                              | 事件参数  |
| -------  | -------------------------------- | -------- |
| change   | 拖拽完成后触发，返回当前最新排列后的值 | （oldValue: 传入的原始数据， newValue: 拖拽后结构） |


