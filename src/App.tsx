import { Component, ReactNode } from 'react';
import './App.scss';

import goodsFromServer from './goods';

const goods = [...goodsFromServer];

type State = {
  selectedGood: string,
  selected: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: '',
    selected: false,
  };

  clear = () => {
    const selectedItem = document.querySelector('.Good--active');

    if (selectedItem !== null) {
      selectedItem.classList.remove('Good--active');
      const selectedButton = selectedItem.querySelector('.Good__select');

      if (selectedButton) {
        selectedButton.removeAttribute('hidden');
      }

      this.setState({
        selectedGood: '',
        selected: false,
      });
    }
  };

  handleButtonSelect = (event: React.MouseEvent, good: string) => {
    if (this.state.selected) {
      this.clear();
    }

    const listItem: Element | null = event.currentTarget.parentElement;
    const selectButton = event.currentTarget;

    if (listItem !== null) {
      listItem.classList.add('Good--active');
      selectButton.setAttribute('hidden', 'on');
    }

    this.setState({
      selectedGood: good,
      selected: true,
    });
  };

  render(): ReactNode {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {!this.state.selected
              ? 'No goods selected'
              : `${this.state.selectedGood} is selected`}
          </h1>

          <button
            type="button"
            className="App__clear"
            onClick={this.clear}
            hidden={!this.state.selected}
          >
            Clear
          </button>
        </header>

        <ul>
          {goods.map(good => {
            return (
              <li className="Good" key={good}>
                {good}
                <button
                  type="button"
                  className="Good__remove"
                  onClick={this.clear}
                >
                  Remove
                </button>

                <button
                  type="button"
                  className="Good__select"
                  onClick={(event) => {
                    this.handleButtonSelect(
                      event,
                      good,
                    );
                  }}
                >
                  Select
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
