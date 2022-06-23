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

interface State {
  selectedGood: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  changeSelectedGoods = (good: string) => {
    const { selectedGood } = this.state;

    if (selectedGood.includes(good)) {
      const index = selectedGood.indexOf(good);

      selectedGood.splice(index, 1);
    } else {
      selectedGood.push(good);
    }

    this.setState({ selectedGood });
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  setHeading = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length === 1) {
      return `Selected goods: ${selectedGood}`;
    }

    return `Selected goods: ${selectedGood.slice(0, -1).join(', ')} and ${selectedGood.slice(-1)}`;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="container">
        <h1 className="title">
          {selectedGood.length > 0
            ? this.setHeading()
            : 'No selected goods'}
          {selectedGood.length > 0 && (
            <button
              type="button"
              className="button is-right"
              onClick={this.clearGoods}
            >
              Clear all
            </button>
          )}
        </h1>

        <ul>
          {goodsFromServer.map(good => {
            return (
              <div className="columns">
                <li
                  key={good}
                  className={`column is-four-fifths
                    ${selectedGood.includes(good)
                ? 'has-background-success-light'
                : ''}`}
                >
                  {good}
                </li>
                <button
                  className={`column button is-light
                    ${selectedGood.includes(good)
                ? 'is-danger'
                : 'is-success'}`}
                  type="button"
                  onClick={() => {
                    this.changeSelectedGoods(good);
                  }}
                >
                  {selectedGood.includes(good)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
