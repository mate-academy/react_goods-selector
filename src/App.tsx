/* eslint-disable no-console */
import './App.scss';

import className from 'classnames';
import React from 'react';

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

interface Type {
  [key:string]: string,
}

  type State = {
    selectGoods: string[],
    buttonCheck: boolean,
  };

class App extends React.PureComponent<{}, State> {
  goodsStorage:Type = { Jam: 'Jam' };

  ending = '';

  state: State = {
    selectGoods: ['Jam'],
    buttonCheck: true,
  };

  isCheck = (good:string) => {
    return !Object.prototype.hasOwnProperty.call(this.goodsStorage, good);
  };

  addProduct = (good: string) => {
    if (!Object.prototype.hasOwnProperty.call(this.goodsStorage, good)) {
      this.goodsStorage[good] = good;
    } else {
      delete this.goodsStorage[good];
    }

    let selectGood = Object.keys(this.goodsStorage);

    this.state.buttonCheck = !!selectGood.length;

    if (selectGood.length > 1) {
      selectGood.splice(selectGood.length - 1, 0, ' and ');
    }

    if (selectGood.length > 3) {
      selectGood = selectGood.map((ell, _i, arr) => {
        if (arr.slice(-3).includes(ell)) {
          return `${ell}`;
        }

        return `${ell}, `;
      });
      console.log(selectGood);
    }

    this.ending = `${selectGood.length > 1 ? 'are' : 'is'} selected`;

    this.setState({ selectGoods: selectGood });
  };

  cleanGoods = () => {
    this.setState({ buttonCheck: false });
    this.goodsStorage = {};
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.buttonCheck
            ? `${this.state.selectGoods.join(' ')} ${this.ending}`
            : 'No goods selected'}
        </h1>
        {this.state.buttonCheck
          && (
            <button
              type="button"
              className="button is-success App__button-remove"
              onClick={() => this.cleanGoods()}
            >
              X
            </button>
          )}
        <ul className="App__list">
          {goodsFromServer.map(good => {
            return (
              <li key={good} className="App__item">
                <p>
                  {good}
                </p>
                <button
                  type="button"
                  className={className('button', 'is-dark', { 'is-success': this.isCheck(good) })}
                  onClick={() => this.addProduct(`${good}`)}
                >
                  {this.isCheck(good) ? 'Add' : 'Remove'}
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
