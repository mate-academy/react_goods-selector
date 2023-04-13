# React Goods Selector
<button
  data-cy="AddButton"
  type="button"
  className="button"
>
  +
</button>
> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

You are given an array of goods. Render them in a table with the ability to select one or clear selection.

> Here is [the working version](https://mate-academy.github.io/react_goods-selector)

+ Write everything inside the `App` (**don't** create additional components).
+ Save a `selectedGood` in the state (`Jam` is the default value).
+ Show the name of the selected good in the `h1.title` (`Jam is selected`).
+ Add the `has-background-success-light` class to the `tr` of the selected Good.
+ Show the `ClearButton` button in the title only when a good is selected.
+ `ClearButton` should clear selection by setting an empty string to `selectedGood`.
+ When there is no selected good, the title should show `No goods selected`.
+ Each good should have an `AddButton` to select the good.
    - only 1 good can be selected at a time;
+ Don't show `AddButton` when a good is selected.
+ Show `RemoveButton` for the selected good to clear selection.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_goods-selector/) and add it to the PR description.
