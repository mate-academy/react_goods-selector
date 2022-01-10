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

type State = {
  goods: string[];
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Dumplings'],
  };

  addGood = (item: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, item] });
  };

  removeGood = (item: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(selected => selected !== item) });
  };

  clearAll = () => {
    this.setState({ selectedGoods: [] });
  };

  showMeWhatUGot = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No Goods are selected';
      case 1:
        return (
          selectedGoods.toString().endsWith('s')
            ? `${selectedGoods} are selected`
            : `${selectedGoods} is selected`
        );
      default:
        return (
          `${selectedGoods.slice(0, -1)
            .join(', ')} and
            ${selectedGoods[selectedGoods.length - 1]} are selected`
        );
    }
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1>
            {this.showMeWhatUGot()}
          </h1>
          {selectedGoods.length > 0
            && (
              <button
                type="button"
                className="App__button App__button--clear"
                onClick={() => this.clearAll()}
              >
                X
              </button>
            )}
        </div>
        <ul className="App__list">
          {goods.map(item => (
            <li key={item} className="App__item">
              {item}
              <button
                type="button"
                className={
                  selectedGoods.includes(item)
                    ? 'App__item--add'
                    : 'App__item--remove'
                }
                onClick={() => (
                  selectedGoods.includes(item)
                    ? this.removeGood(item)
                    : this.addGood(item)
                )}
              >
                {selectedGoods.includes(item)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
