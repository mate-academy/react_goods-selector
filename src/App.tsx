/* eslint-disable react/prefer-stateless-function */
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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGood = (addedGood: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, addedGood],
    }));
  };

  removeGood = (removedGood: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter((good) => good !== removedGood),
    }));
  };

  render() {
    let resultingString = '';

    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        resultingString = 'No goods selected';
        break;
      case 1:
        resultingString = `${selectedGoods[0]} is selected`;
        break;
      default:
        resultingString = `${selectedGoods.slice(0, selectedGoods.length - 1).join(', ')} and `
          + `${selectedGoods.slice(-1)} are selected`;
        break;
    }

    return (
      <div className="App">
        <h1>
          <span>
            {resultingString}
          </span>
        </h1>
        <ul className="goodsList">
          {
            goodsFromServer.map((good) => {
              const isSelected = this.state.selectedGoods.includes(good);

              return (
                <li className="goodsList__item" key={good}>
                  <h3 className="name">
                    {good}
                  </h3>
                  {
                    isSelected
                      ? (
                        <button
                          type="button"
                          className="item__button selected"
                          onClick={() => {
                            this.removeGood(good);
                          }}
                        >
                          Remove item
                        </button>
                      )
                      : (
                        <button
                          type="button"
                          className="item__button selected--not"
                          onClick={() => {
                            this.addGood(good);
                          }}
                        >
                          Add item
                        </button>
                      )
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
