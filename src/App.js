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
    selected: [],
  }

  toAdd = (good) => {
    if (!this.state.selected.includes(good)) {
      this.setState(prevState => ({
        selected: [...prevState.selected, good],
      }));
    }
  }

  toRemove = (good) => {
    this.setState((prevState) => {
      const i = prevState.selected.indexOf(good);

      if (i !== -1) {
        prevState.selected.splice(i, 1);
      }

      return {
        selected: prevState.selected,
      };
    });
  }

  clearSelection = () => {
    this.setState({
      selected: [],
    });
  }

  render() {
    const selectedArr = this.state.selected;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedArr.length > 0 && selectedArr.join(', ')}
        </h1>
        <button
          type="button"
          className="button-clear buttons"
          onClick={this.clearSelection}
        >
          Clear
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedArr.includes(good) && 'selected'}
            >
              {good}
              {' -> '}
              <button
                type="button"
                className="button-add buttons"
                onClick={() => {
                  this.toAdd(good);
                }}
              >
                Add
              </button>
              <button
                type="button"
                className="button-remove buttons"
                onClick={() => {
                  this.toRemove(good);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
