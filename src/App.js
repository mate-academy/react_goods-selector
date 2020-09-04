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
    goods: goodsFromServer,
    item: '',
  }

  goodOnClick = (unit) => {
    this.setState({ item: unit });
  }

  render() {
    const { goods } = this.state;
    const { item } = this.state;

    return (
      <div className="app">
        <button
          type="button"
          className="app__button"
          onClick={() => this.goodOnClick('-')}
        >
          X
        </button>
        <h1 className="app__title">
          {`Selected good: ${item || '-'}`}
        </h1>

        <div className="goods">
          {goods.map(unit => (
            <button
              key={unit}
              type="button"
              onClick={() => {
                this.goodOnClick(unit);
              }}
              className={classNames('unit', { 'unit-active': item === unit })}
            >
              { unit }
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
