# React Goods selector
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://workacccom.github.io/react_goods-selector/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

## Task
1. You are given an array of goods
2. Display them as a list inside the `App` (DON'T create additional components)
3. Add `h1` initially saying `No goods selected`
4. Save a `selectedGood` in the `App`. Let it be `Jam` by default
5. The `h1` should always show the name of the selected good `Jam is selected`

6. The selected good should be highlighted in the list (add CSS class with a background)

7. Add a button `Select` next to each good in the list
8. When you press the button the good becomes selected
9999. Don't show the button next to the selected good
10. You can select another good by pressing its `Select` button
11. Add button `X` for to the `h1` to clear the selection. (Set empty string `''`)
12. The clear button should not be visible if there is no selected good

## (* Optional) Advanced task
1. Implement the ability to select multiple goods (use `selectedGoods` Array)
1. Use functional `setState` described in [this video](https://youtu.be/zMe2Qq-ThpM)
1. Show `Add` or `Remove` instead of `Select` button
1. All the selected goods should be listed in the `h1`:
    - `No goods selected`
    - `Jam is selected`
    - `Carrot, Jam and Eggs are selected`
