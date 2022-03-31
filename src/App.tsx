import React from 'react';
import classnames from 'classnames';

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
  goods: string[];
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGood: 'Jam',
  };

  addGood(good: string) {
    this.setState({ selectedGood: good });
  }

  removeGood() {
    this.setState({ selectedGood: '' });
  }

  checkGood(good: string) {
    return this.state.selectedGood === good;
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <div className="App">

        <h1 className="goods__title">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

          <button
            type="button"
            className="goods__clear"
            onClick={() => {
              this.removeGood();
            }}
          >
            Clear
          </button>
        </h1>

        <ul>
          {goods.map(good => (
            <div className="goods__list">
              <li
                className={classnames('goods__item', {
                  'goods__item--selected': this.checkGood(good),
                })}
              >
                {good}
              </li>

              <button
                type="button"
                className="goods__button"
                onClick={() => (
                  this.checkGood(good) ? this.removeGood() : this.addGood(good)
                )}
              >
                {this.checkGood(good) ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
