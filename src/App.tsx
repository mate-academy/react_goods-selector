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
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (selectedItem: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods
        .filter(good => good !== selectedItem),
    }));
  };

  clearSelectetGoods = () => {
    this.setState(
      { selectedGoods: [] },
    );
  };

  createListOfGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case goodsFromServer.length:
        return 'All goods selected';

      default:
        return `${selectedGoods.slice(0, -1).join(', ')}
          and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <div className="app__frame">
          <h1 className="app__goods">
            {this.createListOfGoods()}
          </h1>

          <ul className="app__list">
            {goodsFromServer.map((good) => {
              return (
                <li
                  data-cy="good"
                  key={good}
                  className={`app__item ${selectedGoods.includes(good)
                    ? 'app__item--active'
                    : false}`}
                >
                  {good}
                  <button
                    type="button"
                    className="app__button"
                    onClick={
                      selectedGoods.includes(good)
                        ? () => this.removeGood(good)
                        : () => this.addGood(good)
                    }
                  >
                    {
                      selectedGoods.includes(good)
                        ? 'Remove'
                        : 'Select'
                    }
                  </button>
                </li>
              );
            })}
          </ul>

          {Boolean(selectedGoods.length) && (
            <button
              type="button"
              className="app__button app__button--x"
              onClick={this.clearSelectetGoods}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    );
  }
}
