# React 商品选择器

[https://github.com/311you/react_goods-selector/blob/master/README.md#react-goods-selector](https://github.com/311you/react_goods-selector/blob/master/README.md#react-goods-selector)
[https://mate-academy.github.io/fe-program/js/extra/react-typescript](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

给你一个商品数组。将它们渲染在表格中，支持选中单个商品或者清空选中状态。
演示地址：[https://mate-academy.github.io/react_goods-selector](https://mate-academy.github.io/react_goods-selector)

所有代码都写在 App 组件内部（不要新建额外组件）。
在 state 中保存 selectedGood（默认值为 Jam）。
在 h1.title 里展示选中商品的名称（示例：Jam is selected）。
给选中商品对应的 tr 标签加上 has-background-success-light 类名。
**仅当已有商品被选中时**，在标题区域展示【清空按钮（ClearButton）】。
点击清空按钮会把 selectedGood 设置为空字符串，以此取消选中。
没有选中任何商品时，标题文字显示：No goods selected（未选中商品）。

每个商品项都要有一个【添加按钮（AddButton）】用于选中该商品。
同一时间只能选中一个商品；
**如果某个商品已经是选中状态，就不再展示它的添加按钮**。
给被选中的商品展示【移除按钮（RemoveButton）】，用来取消选中。

---

# 操作说明（Instructions）

[https://github.com/311you/react_goods-selector/blob/master/README.md#instructions](https://github.com/311you/react_goods-selector/blob/master/README.md#instructions)

安装 Prettier 插件，并使用这份配置文件 [https://mate-academy.github.io/fe-program/tools/vscode/settings.json](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) 开启保存自动格式化。

按照这份规范完成代码实现：[https://github.com/mate-academy/react_task-guideline#react-tasks-guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
参考文档：[https://mate-academy.github.io/fe-program/js/extra/react-typescript](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

新开一个终端，执行 `npm test` 运行测试，保证你的代码可以通过测试。

把链接里 `<your_account>` 替换成你的 GitHub 用户名：`https://<your_account>.github.io/react_goods-selector/`，并把这个链接写到 PR 描述里。
