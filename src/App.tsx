import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

interface Good {
  name: string;
  goodId: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  // костылямба на скорую руку
  name: ` ${good}`,
  goodId: uuidv4(),
}));

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  headeringGenerator = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1)} and ${selectedGoods.at(-1)} are selected`;
    }
  };

  clearSelected = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  selectGood = (good: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (selectedGood: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== selectedGood),
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">{this.headeringGenerator()}</h1>
          <button
            type="button"
            className="clearingButton"
            onClick={this.clearSelected}
          >
            Remove all selected goods
          </button>
          <ul className="goodsList">
            {goodsFromServer.map(good => {
              const isGoodSelected = this.state.selectedGoods.includes(good.name);

              return (
                <div className="goodsList__items">
                  <li key={good.goodId} className="goodsList__item">
                    {good.name}
                  </li>
                  <button
                    type="button"
                    className="button goodsList__button"
                    onClick={
                      isGoodSelected
                        ? this.removeGood(good.name)
                        : this.selectGood(good.name)
                    }
                  >
                    {isGoodSelected ? 'Remove' : 'Select'}
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
