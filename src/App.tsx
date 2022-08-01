import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

import goodsFromServer from './goods';

const uniqueKeys: string[] = [];

for (let i = 0; i < goodsFromServer.length; i += 1) {
  uniqueKeys[i] = uuidv4();
}

type State = {
  selectedGoods: string[];
  title: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
    title: '',
  };

  componentDidMount() {
    this.setTitle();
  }

  setTitle = () => {
    const { selectedGoods } = this.state;
    const { length } = selectedGoods;

    if (length === 0) {
      this.setState({ title: 'No goods selected' });
    }

    if (length === 1) {
      this.setState({ title: `${selectedGoods[0]} is selected` });
    }

    if (length > 1) {
      this.setState({ title: `${selectedGoods.slice(0, length - 1).join(', ')} and ${selectedGoods[length - 1]} are selected` });
    }
  };

  handlingRemove = (good: string, goods: string[]) => {
    this.setState(
      { selectedGoods: goods.filter(item => item !== good) },
      this.setTitle,
    );
  };

  handlingSelect = (good: string, goods: string[]) => {
    this.setState({ selectedGoods: [...goods, good] }, this.setTitle);
  };

  handlingClear = () => {
    this.setState({ selectedGoods: [] }, this.setTitle);
  };

  render() {
    const { selectedGoods, title } = this.state;
    const { length } = selectedGoods;

    return (
      <main className="App is-light">
        <header className="App__header">
          <h1 className="App__title">
            {title}
          </h1>

          {length
            ? (
              <button
                type="button"
                className="App__clear button is-dark"
                onClick={this.handlingClear}
              >
                Clear
              </button>
            )
            : '' }
        </header>

        <ul className="Goods">
          {goodsFromServer.map((good, index) => (
            <li
              key={uniqueKeys[index]}
              className={classNames(
                'Good level-item',
                {
                  'Good--active': selectedGoods.includes(good),
                },
              )}
            >
              <h1>{good}</h1>

              {selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-dark"
                    onClick={() => {
                      this.handlingRemove(good, selectedGoods);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-dark"
                    onClick={() => {
                      this.handlingSelect(good, selectedGoods);
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
