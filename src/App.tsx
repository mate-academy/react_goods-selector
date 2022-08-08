import { Component } from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;
    let title = '';

    switch (selectedGoods.length) {
      case 0:
        title = 'No goods selected';
        break;
      case 1:
        title = `${selectedGoods[0]} selected`;
        break;
      case 2:
        title = `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
        break;
      default:
        title = `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {title}
          </h1>

          {selectedGoods.length > 0
            ? (
              <button
                type="button"
                className="App__clear"
                onClick={() => this.setState({ selectedGoods: [] })}
              >
                Clear
              </button>
            )
            : ''}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={
                classNames(
                  'Good',
                  { 'Good--active': selectedGoods.includes(good) },
                )
              }
              key={good}
            >
              <p>
                {good}
              </p>

              {selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={() => (
                      this.setState({
                        selectedGoods: [...selectedGoods]
                          .filter(el => el !== good),
                      })
                    )}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => (
                      this.setState({ selectedGoods: [...selectedGoods, good] })
                    )}
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
