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

  addProduct = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [
        ...prevState.selectedGoods,
        item,
      ],
    }));
  };

  deleteProduct = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(product => product !== item),
    }));
  };

  clearProduct = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  selectedProduct = () => {
    const { selectedGoods } = this.state;
    let message = '';

    if (this.state.selectedGoods.length === 0) {
      message = 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      message = `${selectedGoods[0]} is selected`;
    }

    if (this.state.selectedGoods.length > 1) {
      const firstPart = selectedGoods.slice(0, selectedGoods.length - 1);
      const secondPart = selectedGoods[selectedGoods.length - 1];

      message = `${firstPart.join(', ')} and ${secondPart} are selected`;
    }

    return message;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="card card__content">
          <h1 className="card-title">
            {selectedGoods[selectedGoods.length - 1]}
            {' '}
            {this.selectedProduct()}
          </h1>
          <button
            type="button"
            className="card-button"
            onClick={() => {
              this.clearProduct();
            }}
          >
            X
          </button>
        </div>

        <div className="goods-list">
          {goodsFromServer.map(goods => (
            <div className="card card__list-card">
              <div className={selectedGoods.includes(goods) ? 'active_item' : 'item'}>
                <h2 key={goods}>{goods}</h2>
                <button
                  type="button"
                  className="card-button"
                  onClick={() => {
                    this.addProduct(goods);
                  }}
                >
                  Add
                </button>

                <button
                  type="button"
                  className="card-button"
                  onClick={() => {
                    this.deleteProduct(goods);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
