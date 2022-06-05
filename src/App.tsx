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
          {goodsFromServer.map(goods => {
            return (
              <div>
                <li key={goods}>{goods}</li>

                <button
                  type="button"
                  onClick={() => {
                    return !selectedGoods.split(' ').includes(goods)
                      ? this.setState({ selectedGoods: `${goods} is selected` })
                      : this.setState({ selectedGoods: 'No goods selected' });
                  }}
                  className={selectedGoods === `${goods} is selected`
                    ? 'button is-danger'
                    : 'button is-success'}
                >
                  { selectedGoods === `${goods} is selected`
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
