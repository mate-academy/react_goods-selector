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
  state = {
    goods: goodsFromServer,
    selectedGoods: [],
  };

  addHandler = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: [...prevState.selectedGoods, good],
      };
    });
  };

  removeHandler = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: prevState.selectedGoods.filter(item => item !== good),
      };
    });
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
        {goods.map(good => (
          <li
            key={good}
            className={cn('list__item', { selected: selectedGoods.some(item => item === good) })}
          >
            {good}
            {selectedGoods.some(item => item === good)
              ? (
                <button type="button" onClick={() => this.removeHandler(good)}>Remove</button>
              )
              : (
                <button type="button" onClick={() => this.addHandler(good)}>Add</button>
              )}
          </li>
        ))}
      </div>
    );
  }
}

export default App;
