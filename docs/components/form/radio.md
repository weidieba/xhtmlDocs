<style>
    .basis-radio .x-radio{
        margin-right: 10px;
    }
</style>
<script>
   module.exports = {
    data() {
      return {
        radiodemo1: '1',
        city: '上海'
      };
    }
  };
</script>
# Radio 单选框

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<demo-block-demo-block>
::: slot source
<template>
    <div class="basis-radio">
        <x-radio label="1" v-model="radiodemo1">选项一</x-radio>
        <x-radio label="2" v-model="radiodemo1">选项二</x-radio>
        <x-radio label="3" v-model="radiodemo1">选项三</x-radio>
    </div>
</template>

:::

要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

::: slot highlight

```html
    <x-radio label="1" v-model="radiodemo1">选项一</x-radio>
    <x-radio label="2" v-model="radiodemo1">选项二</x-radio>
    <x-radio label="3" v-model="radiodemo1">选项三</x-radio>
    <script>
        data() {
            return {
                radiodemo1: '1',
            };
        }
    </script>
```
:::
</demo-block-demo-block>

## 禁用状态

单选框不可用的状态

<demo-block-demo-block>
::: slot source
<template>
    <div class="basis-radio">
        <x-radio label="1" v-model="radiodemo1" disabled>选项一</x-radio>
        <x-radio label="2" v-model="radiodemo1" disabled>选项二</x-radio>
        <x-radio label="3" v-model="radiodemo1" disabled>选项三</x-radio>
    </div>
</template>

:::

只要在x-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。

::: slot highlight

```html
    <x-radio label="1" v-model="radiodemo1" disabled>选项一</x-radio>
    <x-radio label="2" v-model="radiodemo1" disabled>选项二</x-radio>
    <x-radio label="3" v-model="radiodemo1" disabled>选项三</x-radio>
    <script>
        data() {
            return {
                radiodemo1: '1',
            };
        }
    </script>
```
:::
</demo-block-demo-block>

## 单选框组

适用于在多个互斥的选项中选择的场景

<demo-block-demo-block>
::: slot source
<template>
    <div class="basis-radio">
        <x-radio-group v-model="radiodemo1">
            <x-radio label="1">选项一</x-radio>
            <x-radio label="2" disabled>选项二</x-radio>
            <x-radio label="3">选项三</x-radio>
        </x-radio-group>
    </div>
</template>

:::

在x-radio-group中绑定v-model，在x-radio中设置好label即可，提供了change事件来响应变化，它会传入一个参数value。

::: slot highlight

```html
    <x-radio-group v-model="radiodemo1">
        <x-radio label="1">选项一</x-radio>
        <x-radio label="2" disabled>选项二</x-radio>
        <x-radio label="3">选项三</x-radio>
    </x-radio-group>
    <script>
        data() {
            return {
                radiodemo1: '1',
            };
        }
    </script>
```
:::
</demo-block-demo-block>

## 按钮样式

按钮样式的单选组合。

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-radio-group v-model="city" kind="button">
            <x-radio label="上海">上海</x-radio>
            <x-radio label="北京" disabled>北京</x-radio>
            <x-radio label="广州">广州</x-radio>
            <x-radio label="深圳">深圳</x-radio>
        </x-radio-group>
    </div>
</template>

:::

只需要添加参数 kind为 button即可

::: slot highlight

```html
    <x-radio-group v-model="city" kind="button">
        <x-radio label="上海">上海</x-radio>
        <x-radio label="北京" disabled>北京</x-radio>
        <x-radio label="广州">广州</x-radio>
        <x-radio label="深圳">深圳</x-radio>
    </x-radio-group>
    <script>
        data() {
            return {
                city: '上海'
            };
        }
    </script>
```
:::
</demo-block-demo-block>

### `radio`组件的属性

| 参数      | 说明                             | 类型      | 可选值       | 默认值 |
| -------- | -------------------------------- | -------- | ----------- | ----- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled | 是否禁用                          | boolean  | true/false | false |
| name     | 原生name属性                      | string    | - | - |

### `radio`组件的自定义事件

| 事件名称  | 说明                              | 事件参数  |
| -------  | -------------------------------- | -------- |
| input    | 选项被选中时触发，返回当前值          |  value |
| change   | 选项被选中时触发，返回当前值          |  value |

### `radio-group`组件的属性

| 参数      | 说明                             | 类型      | 可选值       | 默认值 |
| -------- | -------------------------------- | -------- | ----------- | ----- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| kind     | radio的样式，button时为按钮样式     | string   | default/button | default |
| vertical | 是否垂直展示，button模式下无效       | boolean  | true/false | false |

### `radio-group`组件的自定义事件

| 事件名称  | 说明                              | 事件参数  |
| -------  | -------------------------------- | -------- |
| input    | 选项被选中时触发，返回当前值 | value |
| change   | 选项被选中时触发，返回当前值 | value |

