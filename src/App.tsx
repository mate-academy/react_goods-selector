import React from 'react';
import classNames from 'classnames';

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

  addOrDelGood = (toggler: boolean, good: string) => {
    if (toggler) {
      this.setState((state) => ({
        selectedGoods: state.selectedGoods.filter(item => item !== good),
      }));
    } else {
      this.setState((state) => ({
        selectedGoods: [...state.selectedGoods, good],
      }));
    }
  };

  render() {
    const { selectedGoods } = this.state;

    const amountGoods = (amount: number) => {
      if (!amount) {
        return 'No goods selected';
      }

      if (amount > 1) {
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
      }

      return `${selectedGoods[0]} is selected`;
    };

    return (
      <div className="App">
        <h1 className="App__title">
          {amountGoods(selectedGoods.length)}
        </h1>
        {!!selectedGoods.length && (
          <button
            type="button"
            className="App__button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            X
          </button>
        )}
        <ul className="list">
          {goodsFromServer.map(good => {
            const toggler = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={
                  classNames('list__good', { list__active: toggler })
                }
              >
                {good}
                <button
                  type="button"
                  className="list__button"
                  onClick={() => {
                    this.addOrDelGood(toggler, good);
                  }}
                >
                  {toggler ? '-' : '+'}
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
