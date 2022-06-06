import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import classNames from 'classnames';

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

const jam: string = goodsFromServer[8];

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [jam],
  };

  handleSelect = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState((prevState) => {
      const removeFromSelected = {
        selectedGoods: prevState.selectedGoods
          .filter(item => item !== good),
      };
      const addToSelected = {
        selectedGoods: [...prevState.selectedGoods, good],
      };

      return selectedGoods.includes(good)
        ? removeFromSelected
        : addToSelected;
    });
  };

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  createTitle = (goods: string[]) => {
    const { length } = goods;
    const firstGood: string = goods[0];
    const twoGoods: string = goods.join(' and ');
    const allGoodsExceptLast: string = goods.slice(0, -1)
      .join(', ');
    const lastGood: string = goods[length - 1];

    switch (length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${firstGood} is selected`;
      case 2:
        return `${twoGoods} are selected`;
      default:
        return `${allGoodsExceptLast} and ${lastGood} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const noGoodsSelected: boolean = selectedGoods.length === 0;
    const clearButtonClasses = classNames(
      'App__button', 'button',
      {
        'App__button--hidden': noGoodsSelected,
      },
    );

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.createTitle(selectedGoods)}
          </h1>
          <button
            type="button"
            className={clearButtonClasses}
            onClick={() => this.clearSelected()}
          >
            Clear
          </button>
        </header>
        <ul className="App__goods">
          {goodsFromServer.map(good => {
            const isSelected: boolean = selectedGoods.includes(good);
            const listItemClasses = classNames(
              'App__goods-item',
              {
                'App__goods-item--selected': isSelected,
              },
            );
            const selectButtonClasses = classNames(
              'App__button', 'button is-small',
              {
                'App__button--selected': isSelected,
              },
            );

            return (
              <li
                key={good}
                className={listItemClasses}
              >
                {good}
                <button
                  type="button"
                  className={selectButtonClasses}
                  onClick={() => (
                    this.handleSelect(good)
                  )}
                >
                  {isSelected ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
