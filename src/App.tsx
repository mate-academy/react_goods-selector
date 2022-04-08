import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import './App.scss';

interface Good {
  name: string;
  id: string;
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
].map((good) => ({
  name: good,
  id: uuidv4(),
}));

interface State {
  selectedGoods: string[]
}

class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (selectedGood: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods
        .filter(good => good !== selectedGood),
    }));
  };

  clearSelection = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  formatHeading = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'no goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1)} and ${selectedGoods.at(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.formatHeading()}</h1>
        {
          Boolean(selectedGoods.length)
          && (
            <button
              type="button"
              onClick={this.clearSelection}
            >
              X
            </button>
          )
        }

        <div className="container">
          <ul className="container__list">
            {goodsFromServer.map((good) => {
              const isGoodSelected = this.state.selectedGoods
                .includes(good.name);

              return (
                <li
                  key={good.id}
                  className={cn(
                    'container__item', {
                      'container__item--selected': isGoodSelected,
                    },
                  )}
                >
                  {good.name}
                  <button
                    type="button"
                    className="button"
                    onClick={
                      isGoodSelected
                        ? this.removeGood(good.name)
                        : this.selectGood(good.name)
                    }
                  >
                    {isGoodSelected ? 'Remove' : 'Select'}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
