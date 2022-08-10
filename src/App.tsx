import cn from 'classnames';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  select(selectedItem: string) {
    this.setState((prevState) => ({
      selectedGoods:
      [...prevState.selectedGoods,
        selectedItem],
    }));
  }

  remove(itemToRemove: string) {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods
        .filter(good => itemToRemove !== good),
    }));
  }

  clear() {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">

            {selectedGoods.length
              ? `${selectedGoods} ${selectedGoods.length > 1 ? 'are' : 'is'} selected`
              : 'No goods selected'}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__clear button"
              onClick={() => {
                this.clear();
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const isIncluded = selectedGoods.includes(good);

            return (
              <li
                className={cn(
                  'Good',
                  { 'Good--active': isIncluded },
                )}
                key={uuidv4()}
              >
                {good}

                {isIncluded
                  ? (
                    <button
                      type="button"
                      className="Good__remove button"
                      key={good}
                      onClick={() => {
                        this.remove(good);
                      }}
                    >
                      Remove
                    </button>
                  )

                  : (
                    <button
                      type="button"
                      className="Good__select button"
                      key={good}
                      onClick={() => {
                        this.select(good);
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
