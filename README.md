# React Goods selector
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_goods-selector/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

## Task
1. You are given an array of goods
1. Display them as a list inside the `App` (**DON'T** create additional components)
1. Add `h1` initially saying `No goods selected`
1. Save a `selectedGood` in the `App`. It should be `Jam` by default
1. The `h1` should always show the name of the selected good `Jam is selected`
1. The selected good should be highlighted in the list (add CSS class with a background)
1. Add a button `Select` next to each good in the list
1. When you press the `Select` button the good becomes selected
1. Don't show the button next to the selected good
1. When the good is selected, the `Select` button should be displayed as `Remove`
1. When you press the `Remove` button the good becomes unselected
1. You can select another good by pressing its `Select` button
1. Add button `Clear` to the `h1` to clear the selection. (Set empty string `''`)
1. The clear button should not be visible if there is no selected good

## (* Optional) Advanced task
1. Implement the ability to select `multiple goods` (use `selectedGoods` Array)
1. Use functional `setState` described in [this video](https://youtu.be/zMe2Qq-ThpM)
1. All the selected goods should be listed in the `h1`:
    - `No goods selected`
    - `Jam is selected`
    - `Carrot, Jam and Eggs are selected`

## REQUIREMENTS

- `selectedGood` (`h1`) should have a `data-cy="title"` attribute
- goods (`li`) should have a `data-cy="good"` attribute
- a name of the good inside the `li` should have a `data-cy="good-name"` attribute
- `Clear` button should have a `data-cy="clear-btn"` attribute
- `Select`/`Remove` button on the good should have a `data-cy="good-btn"` attribute