import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer = [
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
  state = {
    goods: [],
  }

  toggleGoods = (good) => {
    if (this.state.goods.includes(good)) {
      this.setState(state => (
        { goods: state.goods.filter(item => item !== good) }
      ));
    } else {
      this.setState(state => (
        { goods: [...state.goods, good] }
      ));
    }
  }

  clearGoods = () => {
    this.setState({
      goods: [],
    });
  }

  render() {
    let goodsText;

    if (this.state.goods.length === 0) {
      goodsText = 'No goods selected';
    } else if (this.state.goods.length === 1) {
      goodsText = `Selected ${this.state.goods}`;
    } else {
      goodsText = `${this.state.goods.slice(0, -1).join(', ')}
      and
      ${this.state.goods.slice(-1)} selected`;
    }

    return (
      <div className="App">
        <h1>
          {goodsText}
          {this.state.goods
          && (
          <button
            type="button"
            onClick={this.clearGoods}
            className={classNames(
              'clear',
              { clear__visible: this.state.goods.length === 0 },
            )}
          >
            X
          </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'good',
                { good__active: this.state.goods.includes(good) },
              )}
            >
              {good}
              <button type="button" onClick={() => this.toggleGoods(good)}>
                {this.state.goods.includes(good) ? 'Delete' : 'add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
