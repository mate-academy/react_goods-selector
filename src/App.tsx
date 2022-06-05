/* eslint-disable no-console */
/* eslint-disable max-len */
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
  selectedGoods: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam is selected',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="level-width title is-4">{selectedGoods}</h1>
        <ul>
          {goodsFromServer.map(good => {
            return (
              <div>
                <li key={good}>{good}</li>

                <button
                  type="button"
                  onClick={() => {
                    return !selectedGoods.split(' ').includes(good)
                      ? this.setState({ selectedGoods: `${good} is selected` })
                      : this.setState({ selectedGoods: 'No goods selected' });
                  }}
                  className={selectedGoods === `${good} is selected`
                    ? 'button is-danger'
                    : 'button is-success'}
                >
                  { selectedGoods === `${good} is selected`
                    ? 'remove'
                    : 'select'}
                </button>
              </div>

            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
