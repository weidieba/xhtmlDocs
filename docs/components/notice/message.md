
# Message组件
Message 消息提示
常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。
## 基础用法

<script>
    module.exports = {
        methods: {
            demo2() {
                this.$message('这条消息会持续5秒钟', 'info', null, 5000);
            },
            demo3() {
                this.$message.success('这是一条错误消息',function() {
                    alert('触发回调');
                }, 3000);
            },
            demo6() {
                this.$message.error('这是Message.error方式触发的错误消息');
            },
            demoNormal() {
                this.$message.info('这是this.$message.info方式触发的普通消息');
            },
            demoWarning() {
                this.$message.warning('这是this.$message.warning方式触发的警告消息');
            }
        }
  };
</script>

<demo-block-demo-block>
::: slot source
<template>
    <!-- 状态按钮 -->
    <div>
        <x-button status="default"  @click.native="demo2"> 朴素按钮 </x-button>
        <x-button status="primary"  @click.native="demo3"> 主要按钮 </x-button>
        <x-button status="success" @click.native="demo6"> 成功按钮 </x-button>
        <x-button status="warning" @click.native="demoWarning"> 失败按钮 </x-button>
    </div>
</template>

:::

使用status属性来定义 Button 的样式 plain来定义 Button是否有圆角。

::: slot highlight

```html
<div>
    <x-button status="default"  @click.native="demo2"> 朴素按钮 </x-button>
    <x-button status="primary"  @click.native="demo3"> 主要按钮 </x-button>
    <x-button status="success" @click.native="demo6"> 成功按钮 </x-button>
    <x-button status="warning" @click.native="demoWarning"> 失败按钮 </x-button>
    <script>
        module.exports = {
            methods: {
                demo2() {
                    this.$message('这条消息会持续5秒钟', 'info', null, 5000);
                },
                demo3() {
                    this.$message.success('这是一条错误消息',function() {
                        alert('回调被触发了');
                    }, 3000);
                },
                demo6() {
                    this.$message.error('这是Message.error方式触发的错误消息');
                },
                demoNormal() {
                    this.$message.info('这是this.$message.info方式触发的普通消息');
                },
                demoWarning() {
                    this.$message.warning('这是this.$message.warning方式触发的警告消息');
                }
            }
    };
    </script>
</div>
```
:::
</demo-block-demo-block>


### `Message`参数列表

| 参数      | 说明                             | 类型      | 可选值       | 默认值 |
| -------- | -------------------------------- | -------- | ----------- | ----- |
| message  | 消息内容         | string   | - | '' |
| type     | 消息类型         |  string  | info/success/warning/error | - |
| onClose  | 消息窗关闭时的回调函数 | function  | -  | null |
| duration | 消息显示时长, ms。设为 0 则不会自动关闭 | number | - | 1000 |


### `Message`方法
| 方法名称   | 说明                             | 参数  |
| -------  | -------------------------------- | -------- |
| info   | 普通消息                          | （message[, onClose, duration]）         |
| success  | 成功消息                          | （message[, onClose, duration]）         |
| warning  | 警告消息                          | （message[, onClose, duration]）         |
| error    | 出错消息                          | （message[, onClose, duration]）         |


