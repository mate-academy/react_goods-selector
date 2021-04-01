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

class App extends React.Component {
  state = {
    selectedGood: 'No goods selected',
    selectedGoods: [],
  }

  chooseClass = (item) => {
    if (this.state.selectedGoods.includes(item)) {
      return 'selected';
    }

    return 'products';
  }

  clear = () => {
    this.setState({ selectedGood: 'No goods selected' });
    this.setState(state => ({ selectedGoods: [] }));
  }

  remover = (item) => {
    const newSelectedGoods = this.state.selectedGoods.filter(x => x !== item);

    this.setState(state => ({ selectedGoods: newSelectedGoods }));

    const sumRemove = newSelectedGoods.join(', ');

    if (newSelectedGoods.length === 1) {
      this.setState(state => ({
        selectedGood: `${sumRemove} is selected`,
      }));
    } else if (newSelectedGoods.length === 0) {
      this.setState(state => ({
        selectedGood: 'No goods selected',
      }));
    } else {
      this.setState(state => ({
        selectedGood: `${sumRemove} are selected`,
      }));
    }
  }

  adder = (item) => {
    this.state.selectedGoods.push(item);
    const sumAdd = this.state.selectedGoods.join(', ');

    if (this.state.selectedGoods.length === 1) {
      this.setState(state => ({
        selectedGood: `${sumAdd} is selected`,
      }));
    } else {
      this.setState(state => ({
        selectedGood: `${sumAdd} are selected`,
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Shop</h1>
        <p>
          You choose:&nbsp;
          {this.state.selectedGood}
        </p>
        <p>
          {goodsFromServer.length - this.state.selectedGoods.length}
          &nbsp;goods yet!
        </p>
        <div>
          {goodsFromServer.map(item => (
            <li
              key={goodsFromServer.indexOf(item)}
              className={this.chooseClass(item)}
            >
              <>
                {item}
                <button
                  className="button is-success is-light"
                  onClick={() => this.adder(item)}
                  type="button"
                >
                  Add
                </button>
                {(this.state.selectedGoods.includes(item)) && (
                  <button
                    className="button is-warning"
                    onClick={() => this.remover(item)}
                    type="button"
                  >
                    Remove
                  </button>
                )}
              </>
            </li>
          ))}
        </div>
        {(this.state.selectedGood !== 'No goods selected') && (
          <button
            className="button is-danger"
            onClick={() => this.clear()}
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
