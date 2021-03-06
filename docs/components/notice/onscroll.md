
# OnScorll无限滚动
v-on-scrollto 指令可以监听滚动到底部事件，并可以设置偏移量和触发设置的回调函数。
## 基础用法

<script>
    module.exports = {
        data(){
            return {
                list: 10,
                loading: false
            }
        },
        methods: {
            handleScroll1() {
                this.loading = true;
                setTimeout(() => {
                    this.list+=2;
                    this.loading = false;
                }, 1000);
            }
        },
        computed: {
            noMore () {
                return this.list >= 15
            }
        }
  };
</script>
<style>
.scroll-box {
    width: 98%;
    text-align: center;
}
.scorll-ul {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
}
.scorll-list {
    width: 98%;
    max-height: 100%;
    min-height: 40px;
    color: #67c23a;
    background: #e1f3d8;
    margin: 10px;
    list-style: none;
    text-align: center;
}
.loading {
    background: transparent;
    font-size: 14px;
    margin-left: 36px;
}
</style>
<demo-block-demo-block>
::: slot source
<template>
    <!-- 正常使用 -->
    <div class="scroll-box">
        <ul
            v-on-scroll.bottom.10="handleScroll1"
            :scrollDisable="noMore"
            class="scorll-ul"
        >
            <li
                v-for="(item,index) in list"
                :key="index"
                class="scorll-list"
            >
                {{ item }}
            </li>
        </ul>
        <p v-if="loading" class="loading">
            加载中...
        </p>
        <p v-if="noMore" class="loading">没有更多了</p>
    </div>
</template>

:::

监听滚动事件，滚动到底部时加载更多，到底部时自动更新（已设置防抖函数默认300ms）。

::: slot highlight

```html
<div>
    <div class="scroll-box">
        <ul
            v-on-scroll.bottom.10="handleScroll1"
            :scrollDisable="noMore"
            class="scorll-ul"
        >
            <li
                v-for="(item,index) in list"
                :key="index"
                class="scorll-list"
            >
                {{ item }}
            </li>
        </ul>
    </div>
    <script>
        module.exports = {
            data(){
                return {
                    list: 10,
                    loading: false
                }
            },
            methods: {
                handleScroll1() {
                    this.loading = true;
                    setTimeout(() => {
                        this.list+=2;
                        this.loading = false;
                    }, 1000);
                }
            },
            computed: {
                noMore () {
                    return this.list >= 15
                }
            }
    };
    </script>
</div>
```
:::
</demo-block-demo-block>


### 指令的参数

| 类型 | 参数      | 说明                             |
| --- | -------- | -------------------------------- |
| modifiers | bottom   | 在滚动到顶部时触发                  |
| modifiers | 任意数字  | 表示距离底部多少像素时触发回调函数 |
| scrollDisable | 是否禁用  | 是否禁用scorll |
| value     | -  | 表示回调函数 |



