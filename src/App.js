/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
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
  state = { selected: [] };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${selected.join(', ')}`}</h1>
        <ul>
          {goodsFromServer.map((item) => (
            <div key={item} className="item-container">
              <li className={selected.includes(item) ? 'selected' : ''}>
                {item}
              </li>
              <button
                type="button"
                className="select"
                onClick={() =>
                  this.setState((state) => ({
                    selected: [...state.selected, item],
                  }))
                }
              >
                Add
              </button>
              <button
                type="button"
                onClick={() =>
                  this.setState((state) => ({
                    selected: state.selected.filter(
                      (product) => product !== item
                    ),
                  }))
                }
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
