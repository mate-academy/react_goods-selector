import React from 'react';
import './App.scss';

const classNames = require('classnames');

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
    selectedGoods: 'none',
  };

  addGood = (item) => {
    this.setState({ selectedGoods: item });
  };

  clear = () => {
    this.setState({ selectedGoods: 'none' });
  }

  render() {
    return (
      <div className="App">
        <div className="selectBox">
          <button
            type="button"
            onClick={this.clear}
            className={
              classNames('selectBox__button', {
                hidden: this.state.selectedGoods === 'none',
              })}
          >
            X
          </button>
          <h1 className="selectBox__title">
            Selected good:
            {' '}
            { this.state.selectedGoods}
          </h1>
        </div>

        <div className="goods">
          {goodsFromServer.map(good => (
            <div className={classNames('goods__good', {
              selected: good === this.state.selectedGoods,
            })}
            >
              <p key={good}>
                { good }
              </p>

              <button
                type="button"
                className="goods__button"
                onClick={() => this.addGood(good)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
