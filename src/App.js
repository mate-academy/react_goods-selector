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
    selectedGood: 'Jam',
  }

  addSelection = (product) => {
    this.setState({ selectedGood: product });
  }

  removeSelection =() => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1 className="heading__title">
            {
            selectedGood ? `${selectedGood} is selected` : `No goods selected`
            }
          </h1>
          {
          selectedGood && (
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
                selectedGood === product ? 'active' : ''
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
