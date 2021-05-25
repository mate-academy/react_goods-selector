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
    selectedGood: ['Jam'],
  }

  title = (param) => {
    switch (param.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${param[0]} is selected`;
      default:
        return `${param.slice(0, -1).join(', ')}`
        + ` and ${param[param.length - 1]} is selected `;
    }
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {this.title(selectedGood)}
          <button
            type="button"
            className={selectedGood.length === 0
              ? 'hide'
              : ''}
            onClick={() => {
              this.setState({ selectedGood: [] });
            }}
          >
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={selectedGood.includes(good)
                  ? 'selected'
                  : ''
                }
              >
                {good}
              </li>

              <button
                type="button"
                className={selectedGood.includes(good) ? 'hide' : ''}
                onClick={() => {
                  this.setState({ selectedGood: [...selectedGood, good] });
                }}
              >
                Add
              </button>

              <button
                type="button"
                className={selectedGood.includes(good) ? '' : 'hide'}
                onClick={() => {
                  this.setState(selectedGood.splice(selectedGood.findIndex(
                    element => element === good,
                  ), 1));
                }}
              >
                Remove
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
