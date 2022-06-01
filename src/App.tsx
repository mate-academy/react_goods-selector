import React from 'react';
import classNames from 'classnames';
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
  selectedGood: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  goodsToogler = (good: string): string[] => {
    const resultArr = [...this.state.selectedGood];

    if (resultArr.includes(good)) {
      return resultArr.filter(el => el !== good);
    }

    resultArr.push(good);

    return resultArr;
  };

  printCorrectTitle = (arg: string[]): string => {
    if (arg.length === 0) {
      return 'No goods selected';
    }

    if (arg.length === 1) {
      return `${arg} is selected`;
    }

    return `${arg.slice(0, -1).join(', ')} and ${arg[arg.length - 1]} are selected`;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            {this.printCorrectTitle(selectedGood)}
          </h1>

          {selectedGood.length > 0 && (
            <button
              type="button"
              className="clear-btn list_btn"
              onClick={() => {
                this.setState({ selectedGood: [] });
              }}
            >
              Clear
            </button>
          )}
          <ul className="list">
            {goodsFromServer.map(good => (
              <React.Fragment key={good}>
                <li className={classNames(
                  'list_item',
                  { 'list_item--active': selectedGood.includes(good) },
                )}
                >
                  {good}
                  <button
                    type="button"
                    className="list_btn list_btn--remove"
                    onClick={() => {
                      this.setState({ selectedGood: this.goodsToogler(good) });
                    }}
                  >
                    {selectedGood.includes(good)
                      ? 'Remove'
                      : 'Select'}
                  </button>
                </li>
              </React.Fragment>
            ))}
          </ul>

        </div>
      </>
    );
  }
}

export default App;
