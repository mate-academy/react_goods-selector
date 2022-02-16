import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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
    data: goodsFromServer,
    selected: [],
  };

  createSelected() {
    const arr: string[] = this.state.selected;
    const { length } = this.state.selected;

    if (length === 0) {
      return 'No Selected';
    }

    if (length === 1) {
      return `${arr[0]} is selected`;
    }

    let output = '';

    for (let i = 0; i < length - 1; i += 1) {
      output += `${arr[i]} , `;
    }

    return `${output.substring(0, output.length - 2)} and ${arr[arr.length - 1]} are selected`;
  }

  addWord(word: string) {
    const arr: string[] = this.state.selected;

    arr.push(word);

    return arr;
  }

  removeWord(word: string) {
    const arr: string[] = this.state.selected;
    const index: number = arr.indexOf(word);

    if (index >= 0) {
      arr.splice(index, 1);
    }

    return arr;
  }

  check(word: string) {
    const arr: string[] = this.state.selected;
    const index: number = arr.indexOf(word);

    if (index >= 0) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div className="app">
        <h1>
          {`Selected good: -- ${this.createSelected()}  -- `}
          <button
            type="button"
            className="app__clear"
            onClick={() => this.setState({ selected: [] })}
          >
            Clear
          </button>
        </h1>

        <ul>
          {this.state.data.map(good => (
            <li>
              {`${good} - `}
              {!this.check(good) && (
                <button
                  type="button"
                  className="app__add"
                  onClick={
                    () => this.setState({ selected: this.addWord(good) })
                  }
                >
                  Add
                </button>
              )}
              {this.check(good) && (
                <button
                  type="button"
                  className="app__remove"
                  onClick={
                    () => this.setState({ selected: this.removeWord(good) })
                  }
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
