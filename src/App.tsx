import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  goods = goodsFromServer;

  handleClick = (el: string, event:React.MouseEvent<HTMLButtonElement>) => {
    const element = event.currentTarget.parentElement;

    this.removeActive();
    if (element) {
      element.className = 'Good--active';
    }

    this.setState({ selectedGood: el || '' });
  };

  removeActive = () => {
    const active = document.querySelectorAll('.Good--active');

    for (let i = 0; i < active.length; i += 1) {
      active[i].className = 'Good';
    }
  };

  clearGood = (event:React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ selectedGood: '' });

    const element = event.currentTarget.parentElement;

    if (element) {
      element.className = 'Good';
    }

    this.removeActive();
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <div className="App__wrapper">
            {this.state.selectedGood !== ''
              ? <h1 className="App__title">{`${this.state.selectedGood} is selected`}</h1>
              : <h1 className="App__title">No goods selected</h1>}
            {this.state.selectedGood !== ''
              ? (
                <button
                  type="button"
                  className="Good__remove"
                  onClick={(e) => {
                    this.clearGood(e);
                  }}
                >
                  Clear
                </button>
              )
              : <></>}
          </div>

        </header>

        <ul className="App__list">
          {this.goods.map(el => (
            <li
              className="Good"
              key={el}
            >
              {el}
              {this.state.selectedGood === el
                ? (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={(e) => {
                      this.clearGood(e);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={(e) => {
                      this.handleClick(el, e);
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
