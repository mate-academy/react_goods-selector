# React Goods selector
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://MAIK-01.github.io/react_goods-selector/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

## Task
1. You are given an array of goods
2. Display them as a list inside the `App` (**DON'T** create additional components)
3. Add `h1` initially saying `No goods selected`
4. Save a `selectedGood` in the `App`. It should be `Jam` by default
5. The `h1` should always show the name of the selected good `Jam is selected`
6. The selected good should be highlighted in the list (add CSS class with a background)
7. Add a button `Select` next to each good in the list
8. When you press the `Select` button the good becomes selected
9. Don't show the `Select` button next to the selected good
10. When the good is selected, the `Select` button should be displayed as `Remove`
11. When you press the `Remove` button the good becomes unselected
12. You can select another good by pressing its `Select` button
13. Add button `Clear` to the `h1` to clear the selection. (Set empty string `''`)
14. The clear button should not be visible if there is no selected good

## (* Optional) Advanced task
1. Implement the ability to select `multiple goods` (use `selectedGoods` Array)
2. Use functional `setState` described in [this video](https://youtu.be/zMe2Qq-ThpM)
3. All the selected goods should be listed in the `h1`:
    - `No goods selected`
    - `Jam is selected`
    - `Carrot, Jam and Eggs are selected`
4. Add some styles, you are frontend developer :) (use [Bulma](https://bulma.io) or another library)
 - [Center elements](https://bulma.io/documentation/layout/level/)
 - [Customize buttons](https://bulma.io/documentation/elements/button/)
 - [Customize background](https://bulma.io/documentation/overview/colors/)
 - [Add whatever you want](https://bulma.io/documentation/)

