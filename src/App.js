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
    status: '',
  }

  saveHandler = (event) => {
    this.setState({ status: event.target.innerText });
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
              className="goods-item"
              onClick={this.saveHandler}
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
