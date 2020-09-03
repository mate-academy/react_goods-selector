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
    const { word, goodsFromServer } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Selected good:
          {` ${word}`}
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
          {goodsFromServer.map(item => (
            <button
              key={goodsFromServer.indexOf(item)}
              type="button"
              className={`button ${
                item === this.state.word && 'button__active'
              }`}
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
