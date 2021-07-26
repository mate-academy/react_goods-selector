import React from 'react';

import './App.scss';

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
    selectedGoods: [`Jam`],
  }

  clearSelection() {
    this.setState({ selectedGoods: [] });
  }

  addGood(good) {
    this.setState(state => (state.selectedGoods.push(good)));
  }

  removeGood(good) {
    this.setState(
      state => (
        { selectedGoods: state.selectedGoods.filter(item => item !== good) }
      ),
    );
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App box">
        <div className="wrap">
          <h1 className="row-with-items">
            {!this.state.selectedGoods.length ? (
              `No goods selected`
            ) : (
              `Selected products: ${selectedGoods}`
            )}
          </h1>
          <button
            className="button is-small is-danger"
            type="button"
            onClick={
              () => this.clearSelection()
            }
          >
            X
          </button>
        </div>
        <ul>
          {goodsFromServer.map(good => (
            !this.state.selectedGoods.includes(good)
              ? (
                <li
                  className="product"
                  key={good}
                >
                  {good}
                  <button
                    className="
                        button is-small is-rounded is-success is-outlined"
                    type="button"
                    onClick={
                      () => this.addGood(good)
                    }
                  >
                    Select
                  </button>
                </li>
              ) : (
                <li
                  className="product product--selected"
                  key={good}
                >
                  {good}
                  <button
                    className="
                        button is-small is-rounded is-danger is-outlined"
                    type="button"
                    onClick={
                      () => this.removeGood(good)
                    }
                  >
                    Remove
                  </button>
                </li>
              )
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
