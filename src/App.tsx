import React from 'react';
import './App.scss';

import classNames from 'classnames';

type State = {
  selectedGood: string
};

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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clearAll = () => {
    this.setState({
      selectedGood: '',
    });
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {
          selectedGood
            ? <h1>{`${selectedGood} is selected`}</h1>
            : <h1>No goods selected</h1>
        }
        {selectedGood && (
          <button
            type="button"
            onClick={this.clearAll}
            className="button__clear"
          >
            X
          </button>
        )}
        <ul className="goods__list">
          {goodsFromServer.map((value) => (
            <div key={value} className="goods__items">
              <li className={
                classNames(
                  'goods__item',
                  { item__selected: value === selectedGood },
                )
              }
              >
                {value}
              </li>
              <button
                type="button"
                onClick={() => {
                  this.selectGood(value);
                }}
                className={
                  classNames(
                    'items__button',
                    { 'items__button-inactive': value === selectedGood },
                  )
                }
              >
                Select
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
