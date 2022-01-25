import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';

import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  selectItem = (item: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(el => el !== item),
    }));
  };

  removeItems = () => {
    this.setState({ selectedGoods: [] });
  };

  getItems = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 1) {
      return `${selectedGoods.join()} is selected`;
    }

    return `${selectedGoods.join(', ')} are selected`;
  };

  selectedItem = (item: string) => {
    return this.state.selectedGoods.includes(item);
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="box">
        <h1 className="title">
          {selectedGoods.length !== 0
            ? this.getItems()
            : 'No goods selected'}
          {' '}
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.removeItems}
            >
              X
            </button>
          )}
        </h1>

        <div>
          <ul className="content">
            {goodsFromServer.map(good => (
              <li key={good}>
                <div className="block">
                  <span className={classNames(
                    {
                      'tag is-success is-light': this.selectedItem(good),
                    },
                  )}
                  >
                    {good}
                  </span>
                  {' '}
                  {this.selectedItem(good)
                    ? (
                      <button
                        type="button"
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
                        onClick={() => {
                          this.selectItem(good);
                        }}
                      >
                        Select
                      </button>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
