import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  selectGood = (item: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  };

  removeGood = (item: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(el => el !== item),
    }));
  };

  deleteAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  listToShow = () => {
    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods.join(', ')} is selected`;
    }

    return `${this.state.selectedGoods.join(', ')} are selected`;
  };

  render() {
    return (
      <div className="App">
        <h1 className="goods-show-list">
          {this.state.selectedGoods.length > 0
            ? this.listToShow()
            : 'No goods selected'}
          {this.state.selectedGoods.length > 0
            && (
              <button
                type="button"
                onClick={this.deleteAllGoods}
                className="goods-list__button-delete"
              >
                X
              </button>
            )}
        </h1>
        <ul className="list-to-choose">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                classNames(
                  'list-to-choose__good',
                  { 'list-to-choose__good-selected': this.state.selectedGoods.includes(item) },
                )
              }
            >
              {item}
              {this.state.selectedGoods.includes(item)
                ? (
                  <button
                    type="button"
                    onClick={() => this.removeGood(item)}
                    className="list-to-choose__button"
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => this.selectGood(item)}
                    className="list-to-choose__button"
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
