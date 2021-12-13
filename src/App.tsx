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
  title: string;
  selectedGood: string;
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    title: 'No goods selected',
    selectedGood: '',
    selectedGoods: [''],
  };

  getTitle() {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 3) {
      return `${selectedGoods[1]} and ${selectedGoods[2]} are selected`;
    }

    if (selectedGoods.length > 3) {
      const otherGoods = [...selectedGoods].splice(3, selectedGoods.length - 1).join(', ');

      return `${otherGoods}, ${selectedGoods[1]} and ${selectedGoods[2]} are selected`;
    }

    if (selectedGoods.length === 1) {
      return '';
    }

    return `${selectedGoods[1]} is selected`;
  }

  getGood(value: string) {
    this.setState((prevState): State => {
      const updatedGoods = [...prevState.selectedGoods, value];

      return {
        ...prevState,
        selectedGoods: updatedGoods,
      };
    });
  }

  removeGood(value: string) {
    this.setState((prevState): State => {
      const updatedGoods = prevState.selectedGoods.filter(item => item !== value);

      return {
        ...prevState,
        selectedGoods: updatedGoods,
      };
    });
  }

  clearGoodsSelected() {
    this.setState((prevState): State => {
      return {
        ...prevState,
        selectedGood: '',
        selectedGoods: [''],
      };
    });
  }

  render() {
    const { title, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected good:
          {' - '}
          {this.getTitle() || title}
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
        {selectedGoods.length > 1
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
