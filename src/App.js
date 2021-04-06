import React from 'react';
import './App.css';

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

const renderGoods = [];

for (let i = 0; i < goodsFromServer.length; i += 1) {
  renderGoods[i] = {
    name: goodsFromServer[i],
    id: i,
  };
}

class App extends React.Component {
  state = {
    selectedGood: 'No goods selected',
    selectedGoods: [],
  }

  clear = () => {
    this.setState({
      selectedGood: 'No goods selected',
      selectedGoods: [],
    });
  }

  removeItem = (item) => {
    const { selectedGoods } = this.state;

    const newSelectedGoods = selectedGoods.filter(x => x !== item);
    const sumRemove = newSelectedGoods.join(', ');

    if (newSelectedGoods.length === 1) {
      this.setState({
        selectedGood: `${newSelectedGoods[0]} is selected`,
        selectedGoods: newSelectedGoods,
      });
    } else if (newSelectedGoods.length === 0) {
      this.setState({
        selectedGood: 'No goods selected',
        selectedGoods: newSelectedGoods,
      });
    } else {
      this.setState({
        selectedGood: `${sumRemove} are selected`,
        selectedGoods: newSelectedGoods,
      });
    }
  }

  addItem = (item) => {
    const { selectedGoods } = this.state;

    selectedGoods.push(item);
    const sumAdd = selectedGoods.join(', ');

    if (selectedGoods.length === 1) {
      this.setState({
        selectedGood: `${selectedGoods[0]} is selected`,
      });
    } else {
      this.setState({
        selectedGood: `${sumAdd} are selected`,
      });
    }
  }

  render() {
    const { selectedGoods, selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">Shop</h1>
        <p>
          You choose:&nbsp;
          {selectedGood}
        </p>
        <p>
          {goodsFromServer.length - selectedGoods.length}
          &nbsp;goods yet!
        </p>
        <div>
          {renderGoods.map(product => (
            <li
              key={product.id}
              className={
                selectedGoods.includes(product.name)
                  ? 'products selected'
                  : 'products'
              }
            >
              <>
                {product.name}
                {!selectedGoods.includes(product.name)
                  ? (
                    <button
                      className="button is-success is-light"
                      onClick={() => this.addItem(product.name)}
                      type="button"
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      className="button is-warning"
                      onClick={() => this.removeItem(product.name)}
                      type="button"
                    >
                      Remove
                    </button>
                  )
                }
              </>
            </li>
          ))}
        </div>
        {(selectedGood !== 'No goods selected') && (
          <button
            className="button is-danger"
            onClick={this.clear}
            type="button"
          >
            X
          </button>
        )}
      </div>
    );
  }
}

export default App;
