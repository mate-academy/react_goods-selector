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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected :(';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(currentGood => currentGood !== good),
    }));
  };

  clearSelected = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1 className="heading__title">
            {this.showSelectedGoods()}
          </h1>

          <button
            type="button"
            className="button heading__button"
            onClick={this.clearSelected}
          >
            x
          </button>
        </div>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good} className="list__item">
              <span>
                {good}
              </span>

              <button
                type="button"
                className="button list__button"
                onClick={() => {
                  if (this.state.selectedGoods.includes(good)) {
                    this.removeGood(good);
                  } else {
                    this.selectGood(good);
                  }
                }}
              >
                {this.state.selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
