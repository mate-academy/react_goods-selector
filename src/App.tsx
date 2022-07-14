import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getTitle() {
    if (!this.state.selectedGoods.length) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods} is selected`;
    }

    return `${this.state.selectedGoods.slice(0, -1).join(', ')} and ${this.state.selectedGoods.slice(-1)} are selected`;
  }

  addGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods
        .filter(prevGood => prevGood !== good),
    }));
  };

  clearBucket = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <div className="App__container">
          <header className="App__header">
            <h1 className="App__title">
              {this.getTitle()}
            </h1>
            {selectedGoods.length !== 0 && (
              <button
                type="button"
                className="App__clear"
                onClick={this.clearBucket}
              >
                Clear
              </button>
            )}
          </header>

          <ul className="App__list">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={classNames(
                  'App__item',
                  {
                    'App__item--active': selectedGoods.includes(good),
                  },
                )}
              >
                <p>{good}</p>

                {!selectedGoods.includes(good)
                  ? (
                    <button
                      className="App__select"
                      type="button"
                      onClick={() => {
                        this.addGood(good);
                      }}
                    >
                      Select
                    </button>
                  )
                  : (
                    <button
                      className="App__remove"
                      type="button"
                      onClick={() => {
                        this.removeGood(good);
                      }}
                    >
                      Remove
                    </button>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
