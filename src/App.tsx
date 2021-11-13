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

  deleteAllGoods = () => this.setState({ selectedGoods: [] });

  deleteGood = (good: string) => {
    this.setState((state) => {
      return {
        selectedGoods: state.selectedGoods.filter((elementGood) => elementGood !== good),
      };
    });
  };

  addGood = (good: string) => {
    this.setState((state) => {
      return {
        selectedGoods: [...state.selectedGoods, good],
      };
    });
  };

  printSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div>
        <div className="printGoods">
          <h1 className="printGoods__text">{this.printSelectedGoods()}</h1>
        </div>
        <ul className="list">
          {goodsFromServer.map((good) => {
            const goodSelected = selectedGoods.find((elementGood) => elementGood === good);

            return (
              <li
                className={
                  goodSelected
                    ? 'list__item list__item--selected'
                    : 'list__item'
                }
              >
                {good}
                <button
                  className={
                    goodSelected
                      ? 'button button--remove'
                      : 'button button--add'
                  }
                  type="button"
                  onClick={
                    selectedGoods.includes(good)
                      ? () => this.deleteGood(good)
                      : () => this.addGood(good)
                  }
                >
                  {goodSelected
                    ? 'Remove'
                    : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0 && (
          <button
            type="button"
            onClick={this.deleteAllGoods}
            className="button button--X"
          >
            X
          </button>
        )}
      </div>
    );
  }
}

export default App;
