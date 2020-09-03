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

  goodOnClick = (good) => {
    this.setState({ item: good });
  }

  render() {
    const { goods } = this.state;
    const { item } = this.state;

    return (
      <div className="app">
        <button
          type="submit"
          className="app__button"
          onClick={() => this.goodOnClick('-')}
        >
          X
        </button>
        <h1 className="app__title">
          {`Selected good: ${item || '-'}`}
        </h1>

        <div className="goods">
          {goods.map(good => (
            <button
              key={good}
              type="button"
              onClick={() => {
                this.goodOnClick(good);
              }}
              className={classNames('good', { 'good-active': item === good })}
            >
              { good }
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
