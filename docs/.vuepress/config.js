module.exports = {
    title: 'BUI',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            ['/guide', 'bui of vue'],
            {
                title: 'Components',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'Button',
                        path: '/components/button.md'
                    },
                    {
                        title: 'Alert',
                        path: '/components/alert.md'
                    },
                    {
                        title: 'Card',
                        path: '/components/card.md'
                    },
                    {
                        title: 'Checkbox',
                        path: '/components/checkbox.md'
                    },
                    {
                        title: 'Radio',
                        path: '/components/radio.md'
                    },
                    {
                        title: 'Slider',
                        path: '/components/slider.md'
                    },
                    {
                        title: 'Switch',
                        path: '/components/switch.md'
                    },
                    {
                        title: 'Tag',
                        path: '/components/tag.md'
                    },
                    {
                        title: 'Tabs',
                        path: '/components/tabs.md'
                    },
                    {
                        title: 'Input',
                        path: '/components/input.md'
                    },
                    {
                        title: 'Select',
                        path: '/components/select.md'
                    },
                    {
                        title: 'Breadcrumb',
                        path: '/components/breadcrumb.md'
                    },
                    {
                        title: 'Steps',
                        path: '/components/steps.md'
                    },
                    {
                        title: 'Collapse',
                        path: '/components/collapse.md'
                    },
                    {
                        title: 'table',
                        path: '/components/table.md'
                    },
                    {
                        title: 'platformMenu',
                        path: '/components/platformMenu.md'
                    },
                    {
                        title: 'empty',
                        path: '/components/empty.md'
                    },
                ]
            },
        ],
    },
}