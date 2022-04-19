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

class App extends React.Component <{}, State> {
  state = {
    selectedGood: [goodsFromServer[8]],
  };

  showGoods = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGood} is selected`;
      case 2:
        return `${selectedGood[0]} and ${selectedGood[1]} are selected`;
      default:
        return `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]} are selected`;
    }
  };

  addGoods = (product: string) => () => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, product],
    }));
  };

  removeGoods = (product: string) => () => {
    this.setState((prevState) => ({
      selectedGood: prevState.selectedGood.filter(i => i !== product),
    }));
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">{this.showGoods()}</h1>
        {selectedGood.length
          ? <button type="button" onClick={this.clearGoods}>Clear</button>
          : null}
        <ul>
          {
            goodsFromServer.map(product => (
              <li
                key={product}
                className={selectedGood.includes(product) ? 'selected' : ''}
              >
                { product }
                {
                  selectedGood.includes(product) ? (
                    <button type="button" onClick={this.removeGoods(product)}>
                      Remove
                    </button>
                  ) : (
                    <button type="button" onClick={this.addGoods(product)}>
                      Select
                    </button>
                  )
                }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
