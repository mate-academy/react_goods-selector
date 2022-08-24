# React Goods Selector

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

You are given an array of goods. Render them as a list with the ability to select one and change the selection.

1. Write everything inside the `App` (**don't** create additional components).
1. Save a `selectedGood` in the `App` (`Jam` is the default value).
1. Show the name of the selected good in the `App__title` in the `Jam is selected` format.
1. The selected good should be highlighted in the list (add a `Good--active` CSS class).
1. Add a `Clear` button next to the title to clear the selection (set an empty string `''`).
1. The `Clear` button should be visible only if some good is selected.
1. When there is no selected good, the title should show `No goods selected`.
1. Add a `Select` button next to each good in the list. When you press it, the good becomes selected (only one good can be selected at a time).
1. Don't show the `Select` button next to the selected good.
1. Add a `Remove` button next to the selected good in the list. When you press it, the good becomes not selected.

## Advanced task (optional)

1. Implement the ability to select `multiple goods` (use the `selectedGoods` array).
2. Use functional `setState` described in the next **Functional setState** lesson.
3. All the selected goods should be listed in the `h1` tag:
    - `No goods selected`;
    - `Jam is selected`;
    - `Carrot, Jam and Eggs are selected`.
4. Add some styles, you are frontend developer :) (use [Bulma](https://bulma.io) or another library):
 - [Center elements](https://bulma.io/documentation/layout/level/);
 - [Customize buttons](https://bulma.io/documentation/elements/button/);
 - [Customize background](https://bulma.io/documentation/overview/colors/);
 - [Add whatever you want](https://bulma.io/documentation/).

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://BogdanFdVlpr.github.io/react_goods-selector/) and add it to the PR description.
