import { Component } from 'react';
import './App.scss';
import uniqid from 'uniqid';
import 'bulma/css/bulma.min.css';

import cn from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGood: string[];
  goods: string[];
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
    goods: [...goodsFromServer],
  };

  isActive = (good: string) => {
    return this.state.selectedGood.includes(good);
  };

  unselectGoodHandler = (good: string) => (
    this.setState(({ selectedGood }) => ({
      selectedGood: selectedGood.filter(el => el !== good),
    }))
  );

  clearSelectedGoods = () => {
    this.setState({
      selectedGood: [],
    });
  };

  getHeaderTitle = (): string => {
    const lengthSelected = this.state.selectedGood.length;

    if (!lengthSelected) {
      return 'No goods selected';
    }

    if (lengthSelected === 1) {
      return `${this.state.selectedGood[0]} is selected`;
    }

    const selectedWithoutLastElement = [...this.state.selectedGood];

    const lastSelected = selectedWithoutLastElement.pop();

    return `${selectedWithoutLastElement.join(', ')} and ${lastSelected} are selected`;
  };

  selectGoodHandler = (good: string): void => {
    this.setState(({ selectedGood }) => ({
      selectedGood: [...selectedGood, good],
    }));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { this.getHeaderTitle() }
          </h1>
          {selectedGood.length > 0 && (
            <button
              type="button"
              className="App__clear button is-danger is-light"
              onClick={() => this.clearSelectedGoods()}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="content">
          {this.state.goods.map(good => {
            const isActive = this.isActive(good);

            return (
              <li
                key={uniqid()}
                className={cn(
                  'Good',
                  'level',
                  { 'good--active': isActive },
                )}
              >
                {good}
                { isActive
                  ? (
                    <button
                      type="button"
                      className="good__remove button is-warning is-light"
                      onClick={() => {
                        this.unselectGoodHandler(good);
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="good__select button is-success is-light"
                      onClick={() => {
                        this.selectGoodHandler(good);
                      }}
                    >
                      Select
                    </button>
                  )}

              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
