module.exports = {
    title: 'xhtml-ui', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    port: 1234, //端口
    base: '/',
    themeConfig: { //主题配置
        nav: [{
                text: '主页',
                link: '/'
            }, // 导航条
        ],
        // 为以下路由添加侧边栏 
        sidebar: {
            '/components/': [
                {
                    "title": "开发指南",
                    collapsable: false,
                    children: [
                        { title: '快速上手', path:'introduction/fast'}
                    ]
                },
                {
                    "title": "组件",
                    collapsable: false,
                    children: [
                        {
                            "title": "Basic",
                            collapsable: false,
                            children: [
                                { title: 'Button 按钮', path:'basic/button'},
                                { title: 'Icon 图标', path:'basic/icon'},
                                { title: 'Status-bar 状态栏', path:'basic/statusbar'},
                                { title: 'Link 文字连接', path:'basic/link'}
                            ]
                        },
                        {
                            "title": "Froms",
                            collapsable: false,
                            children: [
                                { title: 'Radio 单选框', path:'form/radio'},
                                { title: 'Checkbox 复选框', path:'form/checkbox'},
                            ]
                        },
                        {
                            "title": "Notice",
                            collapsable: false,
                            children: [
                                { title: 'Message 消息提示', path:'notice/message'},
                            ]
                        },
                        // 每加一个菜单需要在这里也新增一下
                    ]
                }
            ]
        }
    }
}
