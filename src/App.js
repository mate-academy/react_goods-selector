import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    word: '',
    goodsFromServer: [
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
    ],
  }

  addGoods = (item) => {
    this.setState({ word: `${item}` });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">
          Selected good: -
          {`${this.state.word}`}
        </h1>
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            this.addGoods('');
          }}
        >
          X
        </button>
        <div>
          {this.state.goodsFromServer.map(item => (
            <button
              type="button"
              className="button"
              onClick={() => {
                this.addGoods(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
