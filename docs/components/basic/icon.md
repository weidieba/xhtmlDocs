## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置icon为 `x-icon-iconName` 来使用即可。例如：

<demo-block-demo-block>
::: slot source
<template>
    <div>
        <ul class="icon-list">
            <li v-for="name in $icon.slice(0,6)" :key="name">
                <span>
                    <x-icon :icon="'x-icon-' + name"></x-icon>
                </span>
            </li>
        </ul>
    </div>
</template>

:::

使用icon属性来定义icon的图标。

::: slot highlight

```html
<x-icon icon="x-icon-platform-eleme"></x-icon>
<x-icon icon="'x-icon-eleme"></x-icon>
<x-icon icon="'x-icon-delete-solid"></x-icon>
<x-icon icon="'x-icon-delete"></x-icon>
<x-icon icon="x-icon-s-tools"></x-icon>

```
:::
</demo-block-demo-block>

### Iconos

<ul class="icon-list">
  <li v-for="name in $icon.slice(0,50)" :key="name">
    <span>
      <x-icon :icon="'x-icon-' + name"></x-icon>
      <span class="icon-name">{{'x-icon-' + name}}</span>
    </span>
  </li>
</ul>
