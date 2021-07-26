import React from 'react';

import './App.scss';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  addGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  };

  removeGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(product => product !== good),
    }));
  };

  emptyBasket = () => {
    this.setState({ selectedGoods: [] });
  };

  getProductsList = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods are selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods.join(' and ')} are selected`;

      default: {
        return (
          `${selectedGoods.slice(0, -2).join(', ')},
           ${selectedGoods.slice(-2).join(' and ')} are selected`
        );
      }
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected goods: ${this.getProductsList()}`}
        </h1>

        <button
          type="button"
          className="button is-danger"
          onClick={this.emptyBasket}
        >
          X
        </button>
        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.some(product => (
              product === good
            ));

            return (
              <li key={good} className="App__item">
                <span>
                  {good}
                </span>
                {!isSelected
                  ? (
                    <button
                      type="button"
                      className="button is-success"
                      onClick={() => {
                        this.addGood(good);
                      }}
                    >
                      Add
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="button is-danger"
                      onClick={() => {
                        this.removeGood(good);
                      }}
                    >
                      Remove
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
