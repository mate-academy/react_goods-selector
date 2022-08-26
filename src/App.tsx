import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type Good = {
  id: number;
  name: string;
};

type State = {
  selectedGoods: string[];
};

let index = 0;

const goods: Good[] = goodsFromServer.map(item => {
  index += 1;

  return {
    id: index,
    name: item,
  };
});

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  formatGoods = (arr: string[]) => {
    switch (arr.length) {
      case 1:
        return `${arr[0]} is selected`;
      case 2:
        return `${arr[0]} and ${arr[1]} are selected`;
      case 3:
        return `${arr[0]}, ${arr[1]} and ${arr[2]} are selected`;
      default:
        return `${arr[0]} and ${arr.length - 1} goods are selected`;
    }
  };

  clearSelectedGoods = () => {
    const { selectedGoods } = this.state;

    selectedGoods.length = 0;
    this.setState({ selectedGoods });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGoods.length > 0
              ? `${this.formatGoods(selectedGoods)}`
              : 'No goods selected'}
          </h1>

          {selectedGoods.length > 0
            && (
              <button
                type="button"
                className="App__clear App__button"
                onClick={this.clearSelectedGoods}
              >
                Clear
              </button>
            )}

        </header>

        <ul className="App__list">
          {goods.map(({ name, id }) => (
            <li
              className={classNames(
                'Good',
                { 'Good--active': selectedGoods.includes(name) },
              )}
              key={id}
            >

              {name}

              {!selectedGoods.includes(name)
                ? (
                  <button
                    type="button"
                    className="Good__select App__button"
                    onClick={() => {
                      selectedGoods.push(name);
                      this.setState({ selectedGoods });
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__remove App__button"
                    onClick={() => {
                      selectedGoods.splice(selectedGoods.indexOf(name), 1);
                      this.setState({ selectedGoods });
                    }}
                  >
                    Remove
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
