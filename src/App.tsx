import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type Good = string | null | ChildNode | undefined;

type State = {
  selectedGoods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  onClickGoodSelectHandler = (index: number) => {
    const button = document.querySelector(`.App__item-button--select_${index}`);
    const goodName = button?.previousSibling;
    const currentGoods = [...this.state.selectedGoods];
    const parent = button?.parentElement;

    if (parent) {
      parent.style.color = 'green';
    }

    if (goodName && this.isSelected(goodName.textContent) === false) {
      this.setState({ selectedGoods: [...currentGoods, goodName.textContent] });
    }
  };

  onClickGoodDismissHandler(index: number) {
    const button = document.querySelector(`.App__item-button--dismiss_${index}`);
    const parent = button?.parentElement;
    const goodName = parent?.firstElementChild;
    const currentGoods = [...this.state.selectedGoods];

    if (parent) {
      parent.style.color = '';
    }

    if (goodName && this.isSelected(goodName.textContent)) {
      this.setState({
        selectedGoods: [...currentGoods
          .filter(good => good !== goodName.textContent)],
      });
    }
  }

  isSelected(good: Good) {
    return this.state.selectedGoods.includes(good);
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App_title">
          Selected goods:
          {selectedGoods.length > 0
            ? ` ${selectedGoods.join(', ')}`
            : ' no selected goods'}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map((good, index) => (
            <li className="App__item">
              <span className="App__item-name">{good}</span>
              {!this.isSelected(good)
                ? (
                  <button
                    type="submit"
                    className={`App__item-button App__item-button--select_${index}`}
                    onClick={() => this.onClickGoodSelectHandler(index)}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="submit"
                    className={`App__item-button App__item-button--dismiss_${index}`}
                    onClick={() => this.onClickGoodDismissHandler(index)}
                  >
                    Dismiss
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
