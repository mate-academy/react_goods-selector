import React from 'react';

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
    goods: ['Jam'],
  };

  createdTitle = () => {
    const goods = [...this.state.goods];

    if (goods.length <= 1) {
      return (
        ['No goods selected', `${goods[0]} is selected`][+goods.length]
      );
    }

    const lastGood = goods.pop();

    return `${goods.join(', ')} and ${lastGood} are selected`;
  }

  addGood = (good) => {
    this.setState(state => ({
      goods: [...state.goods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      goods: state.goods.filter(el => el !== good),
    }));
  }

  removeAllGoods = () => {
    this.setState(state => ({
      goods: [],
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1 className="header__title">{this.createdTitle()}</h1>
          <div className="info-block">
            <button
              type="button"
              className={goods.length ? 'delete-all' : ''}
              onClick={() => this.removeAllGoods}
            />
            <span className="counter">
              Goods added:
              {goods.length}
            </span>
          </div>

        </div>

        <div className="container">
          <ul className="goods-list">
            {
              goodsFromServer.map((good) => {
                const isAdded = goods.includes(good);

                return (
                  <div className="card-wrapper" key={good}>
                    <li
                      className={
                        `card ${goods.includes(good) && 'card--added'}`
                      }
                    >
                      <span className="good">
                        {good}
                      </span>
                      <button
                        type="button"
                        className={`button ${isAdded && 'button--added'}`}
                        onClick={() => {
                          [this.addGood, this.removeGood][+isAdded](good);
                        }}
                      >
                        {['Add', 'Remove'][+isAdded]}
                      </button>
                    </li>
                  </div>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
