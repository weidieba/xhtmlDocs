<style>
    .x-icon {
        margin-right:5px
    }
</style>
## status-bar

### 基础用法

<demo-block-demo-block>
::: slot source
<template>
    <x-statusbar kind="success" content="成功提示的文案！" showCloseIcon>
    </x-statusbar>
    <x-statusbar kind="info" content="消息提示的文案。" showCloseIcon>
    </x-statusbar>
    <x-statusbar kind="alarm" content="仅有最近7天内的图文才保存数据。">
    </x-statusbar>
    <x-statusbar kind="warning-outline" size="medium" content="恭喜，您的企业已经通过信息认证！" showCloseIcon>
    </x-statusbar>
    <x-statusbar kind="error" size="medium" content="收到第二次群发警告，当月群发功能已被禁用">
    </x-statusbar>
</template>

:::

使用kind属性来定义主题  content定义内容 showCloseIcon定义是否有关闭icon size定义大小。

::: slot highlight

```html
    <x-statusbar kind="success" content="成功提示的文案！" showCloseIcon>
    </x-statusbar>
    <x-statusbar kind="info" content="消息提示的文案。" showCloseIcon>
    </x-statusbar>
    <x-statusbar kind="alarm" content="仅有最近7天内的图文才保存数据。">
    </x-statusbar>
    <x-statusbar kind="warning-outline" size="medium" content="恭喜，您的企业已经通过信息认证！" showCloseIcon>
    </x-statusbar>
    <x-statusbar kind="error" size="medium" content="收到第二次群发警告，当月群发功能已被禁用">
    </x-statusbar>
```
:::
</demo-block-demo-block>

### 属性

| 参数      | 说明                             | 类型      | 可选值       | 默认值 |
| -------- | -------------------------------- | -------- | ----------- | ----- |
| **content** | 内容，**必选参数** | string | — | — |
| kind | 主题 | string | success/slight-warning/serious-warning/error/wait/alarm | — |
| size | 大小 | string | large/medium | large |
| center | 是否居中 | boolean | — | false |
| showCloseIcon | 是否显示关闭图标 | boolean | — | false |


### 自定义事件

| 事件名称  | 说明                              | 事件参数  |
| -------  | -------------------------------- | -------- |
| close | 关闭状态栏时触发的事件 | — |

