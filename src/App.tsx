import { Component } from 'react';
import './App.scss';
import uniqid from 'uniqid';
import 'bulma/css/bulma.min.css';

import cn from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGood: string[];
  isSelectedDefault: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
    isSelectedDefault: true,
  };

  goods: string[] = [...goodsFromServer];

  isActive = (good: string) => {
    return !!(this.state.selectedGood.find(item => item === good));
  };

  removeItem = (good: string) => (
    this.setState((prevState) => {
      const { selectedGood } = prevState;
      const selectedIndex = selectedGood
        .findIndex(item => item === good);

      if (selectedIndex !== -1) {
        selectedGood.splice(selectedIndex, 1);
      }

      return {
        selectedGood: [...selectedGood],
      };
    })
  );

  clearState = () => {
    this.setState({
      selectedGood: [],
    });
  };

  setHeader = (): string => {
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

  addItem = (good: string): void => {
    if (this.state.isSelectedDefault) {
      this.clearState();
      this.setState(() => {
        return {
          isSelectedDefault: false,
        };
      });
    }

    this.setState((prevState) => {
      const { selectedGood } = prevState;

      return {
        selectedGood: [...selectedGood, good],
      };
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { this.setHeader() }
          </h1>
          {Boolean(this.state.selectedGood.length) && (
            <button
              type="button"
              className="App__clear button is-danger is-light"
              onClick={() => this.clearState()}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="content">
          {this.goods.map(good => (
            <li
              key={uniqid()}
              className={cn(
                'Good',
                'level',
                { 'Good--active': this.isActive(good) },
              )}
            >
              {good}
              { this.isActive(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-warning is-light"
                    onClick={() => {
                      this.removeItem(good);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-success is-light"
                    onClick={() => {
                      this.addItem(good);
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
