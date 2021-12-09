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

type Props = {};

type State = {
  goods: string[]
};

class App extends React.Component<Props, State> {
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
    this.setState((state) => (
      { goods: state.goods.filter(good => good !== selectedGood) }
    ));
  };

  goodsTitle = () => {
    const { goods } = this.state;
    let title = '';

    switch (goods.length) {
      case 0: {
        title = 'No goods selected';
        break;
      }

      case 1: {
        title = `${goods[0]} is selected`;
        break;
      }

      case 2: {
        title = `${goods[0]} and ${goods[1]} are selected`;
        break;
      }

      default: {
        const joinedGoods = goods.slice(0, goods.length - 1).join(', ');

        title = `${joinedGoods} and ${goods[goods.length - 1]} are selected`;
      }
    }

    return title;
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
                  className={classnames('App__good', { 'App__good--selected': goods.includes(item) })}
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
