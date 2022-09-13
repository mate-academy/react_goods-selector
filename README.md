# React Goods Selector

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

You are given an array of goods. Render them in a table with the ability to select one or clear selection.

> Here is [the working version](https://mate-academy.github.io/react_goods-selector)

1. Write everything inside the `App` (**don't** create additional components).
1. Save a `selectedGood` in the state (`Jam` is the default value).
1. Show the name of the selected good in the `h1.title` (`Jam is selected`).
1. Add the `has-background-success-light` class to the `tr` of the selected Good.
1. Show the `ClearButton` button in the title only when a good is selected.
1. `ClearButton` should clear selection by setting an empty string to `selectedGood`.
1. When there is no selected good, the title should show `No goods selected`.
1. Each good should have an `AddButton` to select the good.
    - only 1 good can be selected at a time;
1. Don't show `AddButton` when a good is selected.
1. Show `RemoveButton` for the selected good to clear selection.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Andrii-Stiebalov.github.io/react_goods-selector/) and add it to the PR description.
