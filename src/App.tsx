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
  state: State = {
    selectedGoods: ['Jam'],
  };

  onSelect = (good: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  onRemove = (good: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  };

  deleteAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  getListToTitle = () => {
    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods.join(', ')} is selected`;
    }

    return `${this.state.selectedGoods.join(', ')} are selected`;
  };

  render() {
    const {
      selectedGoods,
    } = this.state;

    const toCheck = (el: string) => selectedGoods.includes(el);

    return (
      <div className="App">
        <div className="mainTitle__wrapper">
          <h1 className="mainTitle__title">
            {(selectedGoods.length > 0)
              ? this.getListToTitle()
              : 'No goods selected'}
          </h1>

          <div className="mainTitle__wrapperQuantityAndBtn">
            <div className="mainTitle__quantitySelected">
              {'Quantity of selected products: '}
              {selectedGoods.length}
            </div>

            <button
              type="button"
              onClick={() => this.deleteAllGoods()}
              className="
                mainTitle__button
              "
              disabled={
                selectedGoods.length === 0
              }
            >
              Clear
            </button>
          </div>
        </div>

        <ul className="productsList">
          {goodsFromServer.map(good => (
            <li key={good} className="productsList__item">
              <p className="productsList__name">
                {good}
              </p>

              <button
                type="button"
                onClick={() => (
                  toCheck(good)
                    ? this.onRemove(good)
                    : this.onSelect(good)
                )}
                className={
                  toCheck(good)
                    ? 'productsList__button--remove'
                    : 'productsList__button--select'
                }
              >
                {
                  toCheck(good)
                    ? 'Remove'
                    : 'Select'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
