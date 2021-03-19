import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    goodsFromServer: [
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
    ],

    selectedGood: 'Jam',
  }

  addSelection = (product) => {
    this.setState({ selectedGood: product });
  }

  removeSelection =() => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { goodsFromServer, selectedGood } = this.state;

    return (
      <div className="App">
        <div className="heading">
          {selectedGood !== null
            ? (
              <h1 className="heading__title">
                {selectedGood}
                {' '}
                is selected
              </h1>
            )
            : <h1 className="heading__title">No goods selected</h1>}
          {
          selectedGood !== null
          && (
          <button
            type="button"
            className="heading__button"
            onClick={this.removeSelection}
          >
            X
          </button>
          )}
        </div>

        <ul className="list">
          {goodsFromServer.map(product => (
            <li key={product}>
              <span className={
                selectedGood === product ? 'active' : null
                }
              >
                {product}
              </span>
              {' '}
              {
              selectedGood !== product
              && (
              <button
                type="button"
                className="button__select"
                onClick={() => {
                  this.addSelection(product);
                }}
              >
                Select
              </button>
              )
            }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
