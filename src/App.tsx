import React from 'react';
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

export class App extends React.Component<{}, { selectedGoods: string[] }> {
  state = {
    selectedGoods: [],
  };

  clearAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  addItem = (item: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods.filter(element => element !== item)],
    }));
  };

  showGoodsList = () => {
    const { selectedGoods } = this.state;
    const l = selectedGoods.length;

    if (l === 0) {
      return 'No goods selected';
    }

    if (l === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}
      and ${selectedGoods.slice(-1)} are selected`;
  };

  render() {
    const {
      selectedGoods,
    } = this.state;

    return (
      <div className="App">
        <h1 className="selection">
          {this.showGoodsList()}
          {selectedGoods.length === 0
            ? null
            : (
              <button
                className="selection__clear"
                type="button"
                onClick={() => {
                  this.clearAll();
                }}
              >
                X
              </button>
            )}
        </h1>
        <ul>
          {goodsFromServer.map((item) => {
            const selectedItem = selectedGoods.find(el => el === item);

            return (
              <>
                <li
                  className={selectedItem
                    ? 'goods__list--selected'
                    : 'goods__list'}
                  key={item}
                >
                  {item}
                  {!selectedItem
                    ? (
                      <button
                        className="goods__button goods__button--add"
                        type="button"
                        onClick={() => {
                          this.addItem(item);
                        }}
                      >
                        Add
                      </button>
                    )
                    : (
                      <button
                        className="goods__button goods__button--remove"
                        type="button"
                        onClick={() => {
                          this.removeItem(item);
                        }}
                      >
                        Remove
                      </button>
                    )}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
