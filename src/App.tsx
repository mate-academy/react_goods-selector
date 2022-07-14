import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: ['No goods selected'] });
  };

  selectGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState(
      selectedGoods[0] !== 'No goods selected'
        ? { selectedGoods: [...selectedGoods, good] }
        : { selectedGoods: [good] },
    );
  };

  removeGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState(
      selectedGoods.length > 1
        ? {
          selectedGoods: [
            ...selectedGoods.filter(currentGood => currentGood !== good),
          ],
        }
        : { selectedGoods: ['No goods selected'] },
    );
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          {selectedGoods[0] !== 'No goods selected'
          && selectedGoods.length > 0
            ? (
              <>
                <h1
                  className="App__title"
                >
                  {selectedGoods.join(', ')}
                  {' '}
                  {selectedGoods.length === 1
                    ? 'is selected'
                    : 'are selected'}
                </h1>

                <button
                  type="button"
                  className="App__clear"
                  onClick={this.clearSelectedGoods}
                >
                  Clear
                </button>
              </>
            )
            : (
              <h1 className="App__title">
                No goods selected
              </h1>
            )}
        </header>

        <ul className="Good-list">
          {goodsFromServer.map(good => (
            <div className="Good-container">
              <li
                className={classNames(
                  'Good',
                  {
                    'Good--active': selectedGoods.includes(good),
                  },
                )}
              >
                {good}
              </li>

              {!selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                )}
            </div>
          ))}
        </ul>
      </main>
    );
  }
}
