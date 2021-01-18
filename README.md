# React Goods selector
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://5Mountains.github.io/react_goods-selector/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
- DON'T create an additional component for the list of goods, just iterate them in the `App`
- You may create any markup you like
- Render a header (for example `h1`) initially saying `Selected good: - none`
- Render a list of goods
- Add a `Select` button next to each good in the list
- When you press the button near the good it becomes selected
- Add a special class to the selected good to highlight it (e.g with a yellow color)
- There should be only one selected good at a time
- The header should show the name of the selected good
- Add clear button (`X`) next to the header to clear the selection
- The clear button should not be visible if there is no selected good

## (* Optional) Advanced task
- Implement the ability to select multiple goods (use `selectedGoods` Array)
- Use functional `setState` described in [this video](https://youtu.be/zMe2Qq-ThpM)
- Replace `Select` buttons with `Add/Remove`
- All the selected goods should be listed in the header separated with commas.
