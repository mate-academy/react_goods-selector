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

class App extends React.Component {
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
    return (
      <div className="App">
        {
          this.state.selectedGood
            ? <h1>{`${this.state.selectedGood} is selected`}</h1>
            : <h1>No goods selected</h1>
        }
        {this.state.selectedGood && (
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
            <div key={value + Math.random()} className="goods__items">
              <li className={
                classNames(
                  'goods__item',
                  { item__selected: value === this.state.selectedGood },
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
                    { 'items__button-inactive': value === this.state.selectedGood },
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
