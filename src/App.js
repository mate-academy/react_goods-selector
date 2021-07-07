import React from 'react';
import './App.scss';
import cn from 'classnames';

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
    status: '',
  }

  saveHandler = (product) => {
    this.setState({ status: product });
  }

  render() {
    const { status } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${status}`}</h1>
        <div className="goods">
          {goodsFromServer.map(good => (
            <button
              key={good}
              type="button"
              onClick={() => this.saveHandler(good)}
              className={cn({
                goods__item: true,
                selected__item: status === good,
              })}
            >
              {good}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="clear-button"
          onClick={() => {
            this.setState({ status: '' });
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default App;
