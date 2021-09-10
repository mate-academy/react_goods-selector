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

  type State = {
    selectGoodsStorage: string[],
    buttonCheck: boolean,
  };

class App extends React.PureComponent<{}, State> {
  ending = '';

  state: State = {
    selectGoodsStorage: ['Jam'],
    buttonCheck: true,
  };

  isCheck = (good:string) => {
    return this.state.selectGoodsStorage.includes(good);
  };

  addProduct = (good: string) => {
    if (!this.state.selectGoodsStorage.includes(good)) {
      this.setState((currentState) => {
        return {
          selectGoodsStorage: [...currentState.selectGoodsStorage, good],
          buttonCheck: true,
        };
      });
    } else {
      this.setState((currentState) => {
        const { selectGoodsStorage } = currentState;
        const index = selectGoodsStorage
          .indexOf(good);

        selectGoodsStorage
          .splice(index, 1);

        if (!selectGoodsStorage.length) {
          return {
            selectGoodsStorage: [...selectGoodsStorage],
            buttonCheck: false,
          };
        }

        return {
          selectGoodsStorage: [...selectGoodsStorage],
          buttonCheck: true,
        };
      });
    }
  };

  cleanGoods = () => {
    this.setState({ buttonCheck: false });
    this.setState({ selectGoodsStorage: [] });
  };

  render() {
    let goodsSelector = [...this.state.selectGoodsStorage];

    if (goodsSelector.length >= 3) {
      goodsSelector = goodsSelector.map((ell, i, arr) => {
        if (arr.slice(-2).includes(ell)) {
          return i === arr.length - 2 ? ` ${ell} and` : `${ell}`;
        }

        return `${ell}, `;
      });
    }

    if (goodsSelector.length === 2) {
      goodsSelector.splice(1, 0, 'and');
    }

    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.buttonCheck
            ? `${goodsSelector.join(' ')} ${goodsSelector.length === 1 ? 'is' : 'are'} selected`
            : 'No goods selected'}
        </h1>
        {this.state.buttonCheck
          && (
            <button
              type="button"
              className="button is-success App__button-remove"
              onClick={this.cleanGoods}
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
