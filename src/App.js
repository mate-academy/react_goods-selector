// import { nominalTypeHack } from 'prop-types';
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
    goodsList: [],
  }

  addToList = (good) => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList, good],
    }));
  }

  removeFromList = (good) => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList
        .filter(item => item !== good),
    }));
  }

  clearList = () => {
    this.setState(() => ({
      goodsList: [],
    }));
  }

  render() {
    const { goodsList } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {this.state.goodsList.join(',')}
        </h1>

        <button type="button" onClick={this.clearList}>
          X
        </button>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <div
              key={good}
              className={`good ${goodsList.includes(good) ? 'select' : ''}`}
            >
              <li>{good}</li>
              <button
                type="button"
                onClick={() => (this.addToList(good))}
                className="button"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => (this.removeFromList(good))}
                className="button"
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
