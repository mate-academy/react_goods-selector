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
    selected: 'Jam',
  }

  render() {
    const { selected } = this.state;

    return (
      <>
        {selected
          ? (
            <h1>
              Selected good: -
              {selected}

              <button
                type="button"
                onClick={() => {
                  this.setState({ selected: null });
                }}
              >
                X
              </button>
            </h1>
          ) : (
            <h1>
              No goods selected
            </h1>
          )}

        <ul>
          {goodsFromServer.map(el => (
            <li key={el}>

              {el}

              {this.state.selected !== el && (
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ selected: el });
                  }}
                >
                  Add
                </button>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
