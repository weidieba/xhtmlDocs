
# Button组件
常用的操作按钮。
## 基础用法

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <x-button status="default"> 朴素按钮 </x-button>
        <x-button status="primary"> 主要按钮 </x-button>
        <x-button status="success"> 成功按钮 </x-button>
        <x-button status="warning"> 失败按钮 </x-button>
    </div>
    <!-- 带圆角按钮 -->
    <div class="mt15">
        <x-button status="default" plain> 朴素按钮 </x-button>
        <x-button status="primary" plain> 主要按钮 </x-button>
        <x-button status="success" plain> 成功按钮 </x-button>
        <x-button status="warning" plain> 失败按钮 </x-button>
    </div>
</template>

:::

使用status属性来定义 Button 的样式 plain来定义 Button是否有圆角。

::: slot highlight

```html
<div>
    <x-button status="default"> 朴素按钮 </x-button>
    <x-button status="primary"> 主要按钮 </x-button>
    <x-button status="success"> 成功按钮 </x-button>
    <x-button status="warning"> 失败按钮 </x-button>
</div>

<div>
    <x-button status="default" plain> 朴素按钮 </x-button>
    <x-button status="primary" plain> 主要按钮 </x-button>
    <x-button status="success" plain> 成功按钮 </x-button>
    <x-button status="warning" plain> 失败按钮 </x-button>
</div>
```
:::
</demo-block-demo-block>

## 禁用状态

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <x-button status="default" disabled> 朴素按钮 </x-button>
        <x-button status="primary" disabled> 主要按钮 </x-button>
        <x-button status="success" disabled> 成功按钮 </x-button>
        <x-button status="warning" disabled> 失败按钮 </x-button>
    </div>
    <!-- 带圆角按钮 -->
    <div class="mt15">
        <x-button status="default" plain disabled> 朴素按钮 </x-button>
        <x-button status="primary" plain disabled> 主要按钮 </x-button>
        <x-button status="success" plain disabled> 成功按钮 </x-button>
        <x-button status="warning" plain disabled> 失败按钮 </x-button>
    </div>
</template>

:::

使用disabled属性来定义 Button 是否未disabled状态。

::: slot highlight

```html
<div>
    <x-button status="default" disabled> 朴素按钮 </x-button>
    <x-button status="primary" disabled> 主要按钮 </x-button>
    <x-button status="success" disabled> 成功按钮 </x-button>
    <x-button status="warning" disabled> 失败按钮 </x-button>
</div>

<div>
    <x-button status="default" plain disabled> 朴素按钮 </x-button>
    <x-button status="primary" plain disabled> 主要按钮 </x-button>
    <x-button status="success" plain disabled> 成功按钮 </x-button>
    <x-button status="warning" plain disabled> 失败按钮 </x-button>
</div>
```
:::
</demo-block-demo-block>

## loading状态

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <x-button status="default" loading disabled> 朴素按钮 </x-button>
        <x-button status="primary" loading> 主要按钮 </x-button>
        <x-button status="success" loading> 成功按钮 </x-button>
        <x-button status="warning" loading disabled> 失败按钮 </x-button>
    </div>
    <!-- 带圆角按钮 -->
    <div class="mt15">
        <x-button status="default" plain loading> 朴素按钮 </x-button>
        <x-button status="primary" plain loading disabled> 主要按钮 </x-button>
        <x-button status="success" plain loading disabled> 成功按钮 </x-button>
        <x-button status="warning" plain loading> 失败按钮 </x-button>
    </div>
</template>

:::

使用loading属性来定义 Button是否处于loading状态。

::: slot highlight

```html
<div>
    <x-button status="default" loading disabled> 朴素按钮 </x-button>
    <x-button status="primary" loading > 主要按钮 </x-button>
    <x-button status="success" loading > 成功按钮 </x-button>
    <x-button status="warning" loading disabled> 失败按钮 </x-button>
</div>

<div>
    <x-button status="default" plain loading > 朴素按钮 </x-button>
    <x-button status="primary" plain loading disabled> 主要按钮 </x-button>
    <x-button status="success" plain loading disabled> 成功按钮 </x-button>
    <x-button status="warning" plain loading > 失败按钮 </x-button>
</div>
```
:::
</demo-block-demo-block>

## 不同尺寸

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <x-button status="default"> 朴素按钮 </x-button>
        <x-button status="primary"> 主要按钮 </x-button>
        <x-button status="success"> 成功按钮 </x-button>
        <x-button status="warning"> 失败按钮 </x-button>
    </div>
    <!-- 带圆角按钮 -->
    <div class="mt15">
        <x-button status="default" plain size="large"> 朴素按钮 </x-button>
        <x-button status="primary" plain size="large"> 主要按钮 </x-button>
        <x-button status="success" plain size="large"> 成功按钮 </x-button>
        <x-button status="warning" plain size="large"> 失败按钮 </x-button>
    </div>
</template>

:::

使用size属性来定义 Button 的大小样式

::: slot highlight

```html
<div>
    <x-button status="default"> 朴素按钮 </x-button>
    <x-button status="primary"> 主要按钮 </x-button>
    <x-button status="success"> 成功按钮 </x-button>
    <x-button status="warning"> 失败按钮 </x-button>
</div>

<div>
    <x-button status="default" plain size="large"> 朴素按钮 </x-button>
    <x-button status="primary" plain size="large"> 主要按钮 </x-button>
    <x-button status="success" plain size="large"> 成功按钮 </x-button>
    <x-button status="warning" plain size="large"> 失败按钮 </x-button>
</div>
```
:::
</demo-block-demo-block>

## 带icon得button
<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <x-button status="default"> 
            朴素按钮
            <x-icon icon="x-icon-ice-drink" />
        </x-button>
        <x-button status="primary"> 
            主要按钮 
            <x-icon icon="x-icon-edit" />
        </x-button>
        <x-button status="success"> 
            成功按钮 
            <x-icon icon="x-icon-milk-tea" />
        </x-button>
        <x-button status="warning"> 
            失败按钮 
            <x-icon icon="x-icon-coffee" />
        </x-button>
    </div>
</template>

:::

使用size属性来定义 Button 的大小样式

::: slot highlight

```html
<div>
    <x-button status="default"> 朴素按钮 <x-icon icon="x-icon-ice-drink" /> </x-button>
    <x-button status="primary"> 主要按钮 <x-icon icon="x-icon-edit" /></x-button>
    <x-button status="success"> 成功按钮 <x-icon icon="x-icon-milk-tea" /></x-button>
    <x-button status="warning"> 失败按钮 <x-icon icon="x-icon-coffee" /></x-button>
</div>
```
:::
</demo-block-demo-block>

### `Button`组件的属性

| 参数      | 说明                             | 类型      | 可选值       | 默认值 |
| -------- | -------------------------------- | -------- | ----------- | ----- |
| status   | 按钮的样式类型 | string    | default, primary, warning, success | default |
| size     | 按钮的大小                        | string   | medium, large | medium |
| loading  | 是否处于loading状态    | boolean   | -           | false |
| disabled | 是否处于disabled状态   | boolean   | -           | false |
| href     | 按钮实际为a标签，其地址              | string   | -           | - |
| target   | 按钮实际为a标签，其target值         | string   | -           | - |
### `Button`组件的Slot

| Slot名称  | 说明                             |
| -------- | -------------------------------- |
| default  | 默认的slot，作为按钮的内容，如需要icon可以直接x-icon标签使用 |


### `Button`组件的自定义事件

| 事件名称  | 说明                              | 事件参数  |
| -------- | -------------------------------- | -------- |
| click    | 点击事件 | Event |


