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

type State = {
  data: string[],
  selected: string[],
};

class App extends React.Component<{}, State> {
  state = {
    data: goodsFromServer,
    selected: [],
  };

  clear = () => {
    this.setState({
      selected: [],
    });
  };

  createSelected() {
    const arr: string[] = this.state.selected;
    const { length } = this.state.selected;

    switch (length) {
      case 0:
        return 'No Selected';
      case 1:
        return `${arr[0]} is selected`;
      default:
        break;
    }

    const output = arr.join(', ');

    return `${output.replace(new RegExp(',([^,]*)$'), ' and$1')} are selected`;
  }

  addWord(word: string) {
    this.setState(state => ({
      selected: [...state.selected, word],
    }));
  }

  removeWord(word: string) {
    this.setState((state) => ({
      selected: state.selected.filter((select) => select !== word),
    }));
  }

  check(word: string) {
    return this.state.selected.some(select => select === word);
  }

  render() {
    return (
      <div className="app">
        <h1>
          {`Selected good: -- ${this.createSelected()}  -- `}
          <button
            type="button"
            className="app__clear"
            onClick={this.clear}
          >
            Clear
          </button>
        </h1>

        <ul>
          {this.state.data.map(good => (
            <li key={good}>
              {`${good} - `}
              {this.check(good)
                ? (
                  <button
                    type="button"
                    className="app__remove"
                    onClick={
                      () => this.removeWord(good)
                    }
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="app__add"
                    onClick={
                      () => this.addWord(good)
                    }
                  >
                    Add
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
