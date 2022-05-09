import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string[];
};

class App extends React.Component <{}, State> {
  state = {
    selectedGoods: [] as string[],
  };

  showGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  addGoods = (product: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, product],
    }));
  };

  removeGoods = (product: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(i => i !== product),
    }));
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">{this.showGoods()}</h1>
        {selectedGoods.length
          ? <button type="button" onClick={this.clearGoods}>Clear</button>
          : null}
        <ul>
          {
            goodsFromServer.map(product => (
              <li
                key={product}
                className={
                  classNames({ selected: selectedGoods.includes(product) })
                }
              >
                { product }
                {
                  selectedGoods.includes(product) ? (
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
