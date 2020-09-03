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

  selectHandler = (event) => {
    this.setState({
      selected: event.target.innerText,
    });
  }

  clearHandler = () => {
    this.setState({
      selected: '-',
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="heading">
          {`Selected good: ${this.state.selected}`}
        </h1>
        <button
          type="button"
          className={
            this.state.selected !== '-'
              ? 'button button--clear'
              : 'button button--hidden'
          }
          onClick={this.clearHandler}
        >
          X
        </button>
        <div className="goods">
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className={good === this.state.selected
                ? 'button button--selected'
                : 'button'
              }
              onClick={this.selectHandler}
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
