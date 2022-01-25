import React from 'react';

import cn from 'classnames';
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
  goods: string[],
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    selectedGoods: [],
  };

  addHandler = (good: string) => {
    this.setState(state => ({ selectedGoods: [...state.selectedGoods, good] }));
  };

  removeHandler = (good: string) => {
    this.setState(state => ({ selectedGoods: state.selectedGoods.filter(item => item !== good) }));
  };

  clearHandler = () => {
    this.setState({ selectedGoods: [] });
  };

  getGoodsList = () => {
    const selectedGoods = [...this.state.selectedGoods];

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
      {
        const tail = selectedGoods.pop();

        return `${selectedGoods.join(', ')} and ${tail} is selected`;
      }
    }
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length !== 0
            ? (
              <button type="button" onClick={this.clearHandler}>X</button>
            )
            : ''}
          {this.getGoodsList()}
        </h1>
        <ul>
          {goods.map(good => {
            const isSelectedGood = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={cn('list__item', { selected: isSelectedGood })}
              >
                {good}
                {isSelectedGood
                  ? (
                    <button type="button" onClick={() => this.removeHandler(good)}>Remove</button>
                  )
                  : (
                    <button type="button" onClick={() => this.addHandler(good)}>Add</button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
