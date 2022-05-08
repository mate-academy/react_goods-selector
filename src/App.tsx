import React from 'react';
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
].map(good => ({ name: good, id: uuidv4() }));

interface State {
  selectedGoods: string[]
}

class App extends React.Component<{}, State> {
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
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.at(-1)}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">{this.formatHeading()}</h1>
          {
            Boolean(selectedGoods.length)
            && (
              <button
                className="goods__button"
                type="button"
                onClick={this.clearSelection}
              >
                Clear list
              </button>
            )
          }

          <ul className="goods__list">
            {goodsFromServer.map(good => {
              const isGoodSelected = this.state.selectedGoods
                .includes(good.name);

              return (
                <li
                  key={good.id}
                  className={cn('goods__list__item', {
                    isSelected: isGoodSelected,
                  })}
                >
                  {good.name}
                  <button
                    className="goods__button"
                    type="button"
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
