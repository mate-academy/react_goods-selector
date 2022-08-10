import React, { Component } from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  clear = () => {
    this.setState({ selectedGood: [] });
  };

  remove = (el: string) => {
    const filtered
      = this.state.selectedGood.filter(item => item !== el);

    this.setState(() => ({
      selectedGood: [...filtered],
    }));
  };

  select = (el: string) => {
    this.setState(state => ({
      selectedGood: [
        ...state.selectedGood,
        el,
      ],
    }));
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    const getTitle = () => {
      if (selectedGood.length > 0 && selectedGood.length <= 1) {
        return `${selectedGood[0]} is selected`;
      }

      if (selectedGood.length >= 2) {
        const firstPart = [...selectedGood];

        firstPart.length -= 1;

        return `${firstPart.join(', ')} and ${selectedGood[selectedGood.length - 1]} is selected`;
      }

      return 'No goods selected';
    };

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {getTitle()}
          </h1>
          {selectedGood.length > 0 && (
            <button
              type="button"
              className="App__clear"
              onClick={this.clear}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(el => (
            <li
              className={
                classNames('Good',
                  { 'Good--active': this.state.selectedGood.includes(el) })
              }
              key={el}
            >
              {el}
              {selectedGood.includes(el) && (
                <button
                  type="button"
                  className="Good__remove"
                  onClick={() => {
                    this.remove(el);
                  }}
                >
                  Remove
                </button>
              )}
              {!selectedGood.includes(el) && (
                <button
                  type="button"
                  className="Good__select"
                  onClick={() => {
                    this.select(el);
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
