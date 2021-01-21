import React from 'react';
import classNames from 'classnames';
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
    selectedNames: [],
  }

  toggleSelection = (good) => {
    this.setState((state) => {
      if (state.selectedNames.includes(good)) {
        const index = state.selectedNames.indexOf(good);

        state.selectedNames.splice(index, 1);
        this.setState(state);
      } else {
        state.selectedNames.push(good);
        this.setState(state);
      }
    });
  }

  clearSelection = () => {
    this.setState({
      selectedNames: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selectedNames.join(', ')}
        </h1>
        {this.state.selectedNames.length > 0
        && (
          <button
            type="button"
            onClick={this.clearSelection}
          >
            Clear
          </button>
        )
        }
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('list__item', {
                selected: this.state.selectedNames.includes(good),
              })}
            >
              <span>{good}</span>
              <button
                type="button"
                onClick={() => {
                  this.toggleSelection(good);
                }}
              >
                Add/Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
