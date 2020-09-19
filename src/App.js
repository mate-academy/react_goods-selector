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
    goodName: ' - ',
  };

  clearButton = () => {
    this.setState({ goodName: ' - ' });
  };

  selectButton = (event, good, goodName) => {
    this.setState({ goodName: good });

    if (event.ctrlKey) {
      if (goodName === ' - ') {
        this.setState({ goodName: good });

        return null;
      }

      this.setState({ goodName: `${goodName}, ${good}` });
    }

    return null;
  };

  render() {
    const { goodName } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {goodName}
        </h1>
        <button
          type="button"
          onClick={this.clearButton}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                className={goodName.includes(good) ? 'selected-item' : null}
                onClick={(event) => {
                  this.selectButton(event, good, goodName);
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
