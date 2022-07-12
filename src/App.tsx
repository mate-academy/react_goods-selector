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
    good: 'Jam',
  };

  selectButton = (element: string) => {
    this.setState({ good: element });
  };

  removeButton = (element: string) => {
    if (element === this.state.good) {
      this.setState({ good: '' });
    }
  };

  render() {
    const { good } = this.state;

    return (
      <div className="App">
        <h1>
          {good
            ? `Selected good: - ${good}`
            : 'No goods selected'}
        </h1>

        <ul>
          {goodsFromServer.map(element => (
            <li
              key={element}
              className={good === element ? 'selected' : 'usual'}
            >
              <p>{element}</p>

              {good !== element
                ? (
                  <button
                    type="button"
                    className="usualButton"
                    onClick={() => {
                      this.selectButton(element);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="selectedButton"
                    onClick={() => {
                      this.removeButton(element);
                    }}
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
