import React from 'react';
import classNames from 'classnames';

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

const createSentence = (goods: string[]): string => {
  if (goods.length >= 2) {
    return `${goods.slice(0, -1).join(', ')} and ${goods.slice(-1)} are selected`;
  }

  return goods.length ? `${goods[0]} is selected` : 'No goods selected';
};

type State = {
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  toggleGood = (item: string) => {
    const { selectedGoods } = this.state;
    const itemInArray = selectedGoods.indexOf(item);

    if (itemInArray !== -1) {
      selectedGoods.splice(itemInArray, 1);
    } else {
      selectedGoods.push(item);
    }

    this.setState({ selectedGoods });
  };

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__main">
          <h1 className="App__title">
            Selected good:
          </h1>

          <p className="App__selected-list">
            {createSentence(selectedGoods)}
          </p>

          {selectedGoods.length
            ? (
              <button
                type="button"
                className="button-23"
                onClick={this.clearSelected}
              >
                x
              </button>
            )
            : ''}
        </div>

        <ul className="App__goods-list">
          {goodsFromServer.map(item => (
            <li key={item} className="App__goods-item">
              <p className={(
                classNames(
                  'App__item',
                  { 'App__item--selected': selectedGoods.includes(item) },
                )
              )}
              >
                {item}
              </p>

              <button
                type="button"
                className="button-23"
                onClick={event => {
                  event.preventDefault();
                  this.toggleGood(item);
                }}
              >
                {selectedGoods.includes(item) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
