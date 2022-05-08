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
          <button
            className="products-title__button"
            type="button"
            disabled={selectedGood.length === 0}
            onClick={this.clearGood}
          >
            Clear basket
          </button>
        </h1>

        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <>
              <li key={good} className="goods-list__good">
                <button
                  className={`goods-list__button ${
                    selectedGood.includes(good)
                      ? 'goods-list__button-selected'
                      : ''
                  }`}
                  type="button"
                  onClick={() => {
                    if (selectedGood.includes(good)) {
                      return this.removeGood(good);
                    }

                    return this.addGood(good);
                  }}
                >
                  {selectedGood.includes(good) ? 'Remove' : 'Select'}
                </button>
                <div className={`goods-list__good ${
                  selectedGood.includes(good)
                    ? 'goods-list__good-selected'
                    : ''
                }`}
                >
                  {good}
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
