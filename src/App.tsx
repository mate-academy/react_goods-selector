import React from 'react';
import './App.scss';

type State = {
  selectedGoods: string[];
};

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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGoods = (good: string) => {
    this.setState(((prevState: State) => {
      return { selectedGoods: [...prevState.selectedGoods, good] };
    }));
  };

  removeGoods = (good: string) => {
    this.setState((prevState => ({
      selectedGoods: prevState.selectedGoods.filter(restOfgoods => (
        restOfgoods !== good)),
    }
    )));
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  createTitle = (allGoods: string[]) => {
    switch (allGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${allGoods[0]} is selected`;
      case 2:
        return `${allGoods.join(' and ')} are selected`;
      default:
        return `${allGoods.slice(0, -1).join(', ')} and ${allGoods[allGoods.length - 1]} are selected`;
    }
  };

  render(): React.ReactNode {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.createTitle(selectedGoods)}</h1>
        {selectedGoods.length > 0 && (
          <button
            type="button"
            onClick={this.clearSelectedGoods}
          >
            Clear
          </button>
        )}
        <ul className="mt-5">
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.includes(good);
            const btnText = isSelected ? 'Remove' : 'Select';

            return (
              <li
                key={good}
              >
                <span>{good}</span>
                <button
                  type="button"
                  onClick={() => {
                    return isSelected
                      ? this.removeGoods(good)
                      : this.selectGoods(good);
                  }}
                >
                  {btnText}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
