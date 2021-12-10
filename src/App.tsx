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
  goods: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: ['Jam'],
  };

  saveGood = (selectedGood: string) => {
    this.setState((state) => ({
      goods: [...state.goods, selectedGood],
    }));
  };

  clearState = () => {
    this.setState({ goods: [] });
  };

  removeGood = (selectedGood: string) => {
    this.setState((state) => ({
      goods: state.goods.filter(good => good !== selectedGood),
    }));
  };

  goodsTitle = () => {
    const { goods } = this.state;

    switch (goods.length) {
      case 0: {
        return 'No goods selected';
      }

      case 1: {
        return `${goods[0]} is selected`;
      }

      case 2: {
        return `${goods[0]} and ${goods[1]} are selected`;
      }

      default: {
        const joinedGoods = goods.slice(0, goods.length - 1).join(', ');

        return `${joinedGoods} and ${goods[goods.length - 1]} are selected`;
      }
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            List of goods:
            {' '}
            {this.goodsTitle()}
          </h1>

          <button
            className="App__button App__button--clear"
            type="button"
            onClick={() => (
              this.clearState()
            )}
            style={!goods.length ? { visibility: 'hidden' } : { visibility: 'visible' }}
          >
            Clear
          </button>
        </div>

        <ul className="App__listOfGoods">
          {
            goodsFromServer.map(item => (
              <div className="App__item">
                <li
                  className={classnames('App__good',
                    { 'App__good--selected': goods.includes(item) })}
                  key={item}
                >
                  {item}
                </li>

                <button
                  className="App__button App__button--add"
                  type="button"
                  onClick={() => (
                    this.saveGood(item)
                  )}
                  style={goods.includes(item) ? { display: 'none' } : { display: 'block' }}
                >
                  Add
                </button>

                <button
                  className="App__button App__button--remove"
                  type="button"
                  onClick={() => (
                    this.removeGood(item)
                  )}
                  style={!goods.includes(item) ? { display: 'none' } : { display: 'block' }}
                >
                  Remove
                </button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default App;
