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
    item: '',
  }

  selectGood = (unit) => {
    this.setState({ item: unit });
  }

  render() {
    const { item } = this.state;

    return (
      <div className="app">

        <h1 className="app__title">
          {`Selected good: ${item || '-'}`}
        </h1>
        {item && (
          <button
            type="button"
            className="app__button"
            onClick={() => this.selectGood('')}
          >
            {' '}
            X
          </button>
        )}

        <div className="goods">
          {goodsFromServer.map(unit => (
            <button
              key={unit}
              type="button"
              onClick={() => {
                this.selectGood(unit);
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
