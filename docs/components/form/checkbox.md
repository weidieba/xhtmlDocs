<script>
    module.exports = {
    data() {
      return {
        isCheck: true,
        isCheck1: false,
        isCheck2: false,
        testArray: ['腾讯', '阿里', '字节跳动', '360'],
        model: [],
        indeterminate: false,
        isChecked: false
      };
    },
    methods: {
        handleGroupChange(val) {
            this.indeterminate = this.model.length < this.testArray.length;
            this.isChecked = this.model.length > 0;
        },
        handleChange(value) {
            this.model = value ? this.testArray : [];
        }
    }
  };
</script>

# Checkbox

## 基础用法
基础的复选框选择用法。
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-checkbox v-model="isCheck" label="正常的checkbox1"></x-checkbox>
        <x-checkbox v-model="isCheck1" label="正常的checkbox2"></x-checkbox>
        <x-checkbox v-model="isCheck" label="正常的checkbox3"></x-checkbox>
    </div>
</template>
:::

在`x-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

::: slot highlight

```html
    <x-checkbox v-model="isCheck" label="正常的checkbox1"></x-checkbox>
    <x-checkbox v-model="isCheck1" label="正常的checkbox2"></x-checkbox>
    <x-checkbox v-model="isCheck" label="正常的checkbox3"></x-checkbox>
```
:::
</demo-block-demo-block>

## 禁用状态
多选框不可用状态。

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-checkbox v-model="isCheck1" label="禁用的checkbox1" :disabled="true"></x-checkbox>
        <x-checkbox v-model="isCheck" label="禁用的checkbox2" :disabled="true"></x-checkbox>
    </div>
</template>

:::

使用`disabled`属性来定义是否禁用

::: slot highlight

```html
    <x-checkbox v-model="isCheck1" label="禁用的checkbox1" :disabled="true"></x-checkbox>
    <x-checkbox v-model="isCheck" label="禁用的checkbox2" :disabled="true"></x-checkbox>
```
:::
</demo-block-demo-block>

## indeterminate 状态
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<demo-block-demo-block>

::: slot source
<template>
    <div>
        <x-checkbox
            v-model="isChecked"
            :indeterminate="indeterminate"
            label="全选"
            @change="handleChange"
        >
        </x-checkbox>
        <x-checkbox-group  v-model="model" @change="handleGroupChange"
        >
            <x-checkbox
                v-for="(item,index) in testArray"
                :key="index"
                :value="item"
                :label="item"
            ></x-checkbox>
        </x-checkbox-group>
    </div>
</template>

:::

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

::: slot highlight

```html
    <x-checkbox v-model="isChecked" :indeterminate="indeterminate" label="全选" @change="handleChange"></x-checkbox>
    <x-checkbox-group  v-model="model" @change="handleGroupChange">
        <x-checkbox v-for="(item,index) in testArray" :key="index" :value="item" :label="item"></x-checkbox>
    </x-checkbox-group>
    <script>
        export default {
            data() {
            return {
                testArray: ['腾讯', '阿里', '字节跳动', '360'],
                model: [],
                indeterminate: false,
                isChecked: false
            };
            },
            methods: {
                handleGroupChange(val) {
                    this.indeterminate = this.model.length < this.testArray.length;
                    this.isChecked = this.model.length > 0;
                },
                handleChange(value) {
                    this.model = value ? this.testArray : [];
                }
            }
        };
    </script>
```
:::
</demo-block-demo-block>

## 带有边框

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-checkbox v-model="isCheck" label="正常的checkbox1" borders></x-checkbox>
        <x-checkbox v-model="isCheck1" label="正常的checkbox2" borders></x-checkbox>
        <x-checkbox v-model="isCheck" label="正常的checkbox3" borders></x-checkbox>
    </div>
</template>
:::

设置`borders`属性可以渲染为带有边框的多选框。

::: slot highlight

```html
    <x-checkbox v-model="isCheck" label="正常的checkbox1" borders></x-checkbox>
    <x-checkbox v-model="isCheck1" label="正常的checkbox2" borders></x-checkbox>
    <x-checkbox v-model="isCheck" label="正常的checkbox3" borders></x-checkbox>
```
:::
</demo-block-demo-block>

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值 | string / number / boolean  |       —        |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| borders  | 是否显示边框  | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

### Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |
| input  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |
| input  | 当绑定值变化时触发的事件 | 更新后的值 |
