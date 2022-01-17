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
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addToSelect = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  clearSelect = () => {
    this.setState(
      { selectedGoods: [] },
    );
  };

  removeFromSelect = (selectedItem: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== selectedItem),
    }));
  };

  renderSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} 
          and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">

        <h1>
          {this.renderSelectedGoods()}
        </h1>

        {selectedGoods.length > 0 && (
          <button
            type="button"
            onClick={this.clearSelect}
          >
            Clear Selected Items
          </button>
        )}

        <ul className="goods">
          {goodsFromServer.map((good) => {
            return (
              <li
                key={good}
                className={`goods__item ${selectedGoods.includes(good)
                  ? 'goods__item--active'
                  : ''}`}
              >
                {good}
                <button
                  type="button"
                  className="button"
                  onClick={
                    selectedGoods.includes(good)
                      ? () => this.removeFromSelect(good)
                      : () => this.addToSelect(good)
                  }
                >
                  {
                    selectedGoods.includes(good)
                      ? 'Remove'
                      : 'Add'
                  }
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
