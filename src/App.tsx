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

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getTitle() {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${[...selectedGoods]
          .splice(3, selectedGoods.length - 1)
          .join(', ')}, ${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
    }
  }

  getGood(value: string) {
    this.setState((prevState): State => {
      return {
        selectedGoods: [...prevState.selectedGoods, value],
      };
    });
  }

  removeGood(value: string) {
    this.setState((prevState): State => {
      return {
        selectedGoods: prevState.selectedGoods.filter(item => item !== value),
      };
    });
  }

  clearGoodsSelected() {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Selected good: - ${this.getTitle()}`}
        </h1>
        <ul className="App__list goodsList">
          {goodsFromServer.map((item) => {
            const isVisible = selectedGoods.includes(item);

            return (
              <li key={item} className={`goodsList__item ${isVisible && 'goodsList__item--selected'}`}>
                {item}
                {!isVisible
              && (
                <button
                  type="button"
                  onClick={() => this.getGood(item)}
                  className="goodsList__button goodsList__button--add"
                >
                  Add
                </button>
              )}
                {isVisible
              && (
                <button
                  type="button"
                  onClick={() => this.removeGood(item)}
                  className="goodsList__button goodsList__button--remove"
                >
                  Remove
                </button>
              )}
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0
        && (
          <button
            type="button"
            onClick={() => this.clearGoodsSelected()}
            className="App__button"
          >
            X
          </button>
        )}
      </div>
    );
  }
}
