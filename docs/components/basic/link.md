# Link

## 基础用法
基础的文字链接用法。

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-link href="http://47.101.159.68:8080/" target="_blank" underline>文字连接</x-link>
        <x-link type="primary">文字连接</x-link>
        <x-link type="success">文字连接</x-link>
        <x-link type="warning" underline>文字连接</x-link>
        <x-link type="danger">文字连接</x-link>
        <x-link type="info">文字连接</x-link>
    </div>
</template>

:::

使用type属性来定义主题  href定义 跳转地址

::: slot highlight

```html
    <x-link href="http://47.101.159.68:8080/" target="_blank">文字连接</x-link>
    <x-link type="primary">文字连接</x-link>
    <x-link type="success">文字连接</x-link>
    <x-link type="warning">文字连接</x-link>
    <x-link type="danger">文字连接</x-link>
    <x-link type="info">文字连接</x-link>
```
:::
</demo-block-demo-block>

## 禁用状态
文字链接不可用状态。

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-link href="http://47.101.159.68:8080/" target="_blank" disabled underline>文字连接</x-link>
        <x-link type="primary" disabled>文字连接</x-link>
        <x-link type="success" disabled>文字连接</x-link>
        <x-link type="warning" disabled>文字连接</x-link>
        <x-link type="danger" disabled>文字连接</x-link>
        <x-link type="info" disabled>文字连接</x-link>
    </div>
</template>

:::

使用disabled属性来定义是否禁用

::: slot highlight

```html
    <x-link href="http://47.101.159.68:8080/" target="_blank" disabled>文字连接</x-link>
    <x-link type="primary" disabled>文字连接</x-link>
    <x-link type="success" disabled>文字连接</x-link>
    <x-link type="warning" disabled>文字连接</x-link>
    <x-link type="danger" disabled>文字连接</x-link>
    <x-link type="info" disabled>文字连接</x-link>
```
:::
</demo-block-demo-block>

## 图标
带图标的文字链接可增强辨识度。

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <x-link icon="x-icon-edit">编辑</x-link>
        <x-link>查看<x-icon class="x-icon-view x-icon--right" /></x-link>
    </div>
</template>

:::

使用disabled属性来定义是否禁用

::: slot highlight

```html
    <x-link icon="x-icon-edit">编辑</x-link>
    <x-link>查看<x-icon class="x-icon-view x-icon--right" /></x-link>
```
:::
</demo-block-demo-block>

### Attributes

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| type           | 类型                   | string  | primary / success / warning / danger / info | default |
| underline      | 是否下划线                         | boolean | —                                    | false    |
| disabled       | 是否禁用状态                       | boolean | —                                    | false   |
| href           | 原生 href 属性                     | string  | —                                    | -       |
| icon           | 图标类名                       | string  | —                                    | -       |
