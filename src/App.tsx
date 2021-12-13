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

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addGood = (good: string) => {
    this.setState(state => {
      return {
        selectedGoods: [...state.selectedGoods, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState(state => {
      return {
        selectedGoods: state.selectedGoods.filter(innerGood => innerGood !== good),
      };
    });
  };

  clearAllGoods = () => {
    this.setState(
      {
        selectedGoods: [],
      },
    );
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="selected">{this.showSelectedGoods()}</h1>

        <ul className="list">
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.find(innerGood => innerGood === good);

            return (
              <li
                key={good}
                className={
                  isSelected
                    ? 'list__item list__item-green'
                    : 'list__item'
                }
              >
                {good}

                <button
                  className="list__btn"
                  type="button"
                  onClick={
                    selectedGoods.find(innerGood => innerGood === good)
                      ? () => this.removeGood(good)
                      : () => this.addGood(good)
                  }
                >
                  {isSelected ? 'Remove' : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>

        {selectedGoods.length > 0 && (
          <button className="btn-clear" type="button" onClick={this.clearAllGoods}>
            Clear all selections
          </button>
        )}
      </div>
    );
  }
}

export default App;
