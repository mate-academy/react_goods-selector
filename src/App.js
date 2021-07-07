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
    selected: '-',
  }

  selectHandler = (event, product) => {
    this.setState({ selected: product });
  }

  clear = () => {
    this.setState({ selected: '-' });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <div className="list">
          <h1>{`Selected good: ${selected}`}</h1>
          <button
            type="button"
            className="list__btn"
            onClick={this.clear}
          >
            Clear
          </button>
        </div>
        <div className="goods">
          {goodsFromServer.map(good => (
            <button
              key={good}
              type="button"
              className={good === selected
                ? 'selected goods__good'
                : 'goods__good'
              }
              onClick={event => this.selectHandler(event, good)}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
