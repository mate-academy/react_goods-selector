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
  selectedGood: string;
  selectedGoods?: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood || 'No goods selected'}
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map(good => (
            <li
              className={(selectedGood === good) ? ('GoodsList__item--selected') : 'GoodsList__item'}
              key={good}
            >
              {good}
              <button
                className={(selectedGood === good) ? ('Button--hidden') : 'Button'}
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        <p>Amount of goods in the list: {goodsFromServer.length}</p>
        <button
          className={(selectedGood) ? 'Button' : 'Button--hidden'}
          type="button"
          onClick={() => {
            this.setState({
              selectedGood: '',
            });
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default App;
