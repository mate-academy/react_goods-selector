import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
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
    word: '',
  }

  changeWord = (message) => {
    this.setState({ word: message });
  };

  clearAll = () => {
    this.setState({ word: '' });
  }

  render() {
    const { goodsFromServer, word } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: - ${word}`}</h1>
        <button
          type="button"
          className="clear"
          onClick={this.clearAll}
        >
          X
        </button>
        {goodsFromServer.map(goods => (
          <li
            key={goods}
            className="item"
          >
            <button
              className={`button ${word === goods && 'selected'}`}
              type="button"
              onClick={(event) => {
                this.changeWord(goods);
              }}
            >
              {goods}
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
