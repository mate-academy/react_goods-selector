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
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState(
      (prevState) => ({ selectedGood: [...prevState.selectedGood, good] }),
    );
  };

  removeGood = (good: string) => {
    this.setState(
      (prevState) => (
        { selectedGood: prevState.selectedGood.filter(elem => elem !== good) }
      ),
    );
  };

  clearGood = () => {
    this.setState({ selectedGood: [] });
  };

  createTitle = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `In bascet ${selectedGood[0]} is selected`;

      case 2:
        return `In bascet ${selectedGood.join(' and ')} are selected`;

      default:
        return `In bascet ${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="products-title">
          <div className="products-title__bascet">
            {this.createTitle()}
          </div>
          {selectedGood.length
            ? (
              <button
                type="button"
                className="products-title__button"
                onClick={this.clearGood}
              >
                Clear basket
              </button>
            )
            : ''}
        </h1>
        <ul className="goods-list">
          {goodsFromServer.map(good => {
            const isSelected = selectedGood.includes(good);

            return (
              <li key={good} className="goods-list__good">
                <button
                  className={`goods-list__button ${
                    isSelected
                      ? 'goods-list__button-selected'
                      : ''
                  }`}
                  type="button"
                  onClick={() => (isSelected
                    ? this.removeGood(good)
                    : this.addGood(good))}
                >
                  {isSelected ? 'Remove' : 'Select'}
                </button>
                <div className={`goods-list__good ${
                  isSelected
                    ? 'goods-list__good-selected'
                    : ''
                }`}
                >
                  {good}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
