import React from 'react';
import './App.scss';

const goodsFromServer = [
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
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  setSelectedGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState((prevState => {
      if (selectedGoods.includes(good)) {
        return {
          selectedGoods: prevState.selectedGoods.filter(e => e !== good),
        };
      }

      return { selectedGoods: [...prevState.selectedGoods, good] };
    }));
  };

  clearSelectedGood = (good: string) => {
    this.setState((prevState => {
      return {
        selectedGoods: [...prevState.selectedGoods].filter(e => e !== good),
      };
    }));
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  createTitle = (arrGoods: string[]) => {
    switch (arrGoods.length) {
      case 0:
        return 'No goods selected';
        break;

      case 1:
        return `${arrGoods[0]} is selected`;
        break;

      case 2:
        return `${arrGoods.join(' and ')} are selected`;
        break;

      default:
        return `${arrGoods.slice(0, -1).join(', ')} and ${arrGoods[arrGoods.length - 1]} are selected`;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            { this.createTitle(this.state.selectedGoods) }
          </h1>
          <button
            type="button"
            className="App__button-clean"
            onClick={this.clearSelectedGoods}
          >
            Clear
          </button>
        </div>
        <ul className="App__goodsList">
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGoods.includes(good);
            const buttonText = isSelected ? 'Remove' : 'Select';

            return (
              <li
                className="App__good"
                key={good}
              >
                <span>{good}</span>
                <button
                  onClick={() => {
                    return isSelected
                      ? this.clearSelectedGood(good)
                      : this.setSelectedGood(good);
                    this.createTitle(this.state.selectedGoods);
                  }}
                  type="button"
                  className="App__button-select"
                >
                  {buttonText}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
