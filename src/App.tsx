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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  select = (newGood: string) => {
    this.setState(({ selectedGoods }) => {
      return { selectedGoods: [...selectedGoods, newGood] };
    });
  };

  remove = (goodToRemove: string) => {
    this.setState(({ selectedGoods }) => {
      return ({
        selectedGoods: selectedGoods.filter(good => good !== goodToRemove),
      });
    });
  };

  deleteAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Selected goods: ${selectedGoods.length > 0
            ? (selectedGoods.join(', '))
            : ('No selected goods')
          }`}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map((good) => {
            return (
              <li
                key={good}
                className="App__item"
              >
                <span
                  className={
                    selectedGoods.includes(good)
                      ? 'App__good App__good--active'
                      : 'App__good'
                  }
                >
                  {good}
                </span>
                <button
                  type="button"
                  className="App__button"
                  onClick={
                    selectedGoods.includes(good)
                      ? () => this.remove(good)
                      : () => this.select(good)
                  }
                >
                  {
                    selectedGoods.includes(good)
                      ? 'Delete'
                      : 'Add'
                  }
                </button>
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0
          && (
            <button
              type="button"
              className="App__delete"
              onClick={this.deleteAll}
            >
              X
            </button>
          )}
      </div>
    );
  }
}

export default App;
