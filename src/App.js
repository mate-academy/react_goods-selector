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
    selectedGood: null,
    header: null,
  }

  markSelectedGood = (event, product) => {
    const { selectedGood } = this.state;
    const item = event.target.closest('.list__item');

    if (selectedGood) {
      selectedGood.classList.remove('list__item--selected');
    }

    item.classList.add('list__item--selected');

    this.setState({
      selectedGood: item,
      header: product,
    });
  }

  clearSelectedGood = (event) => {
    const { selectedGood } = this.state;

    if (selectedGood) {
      selectedGood.classList.remove('list__item--selected');
    }

    this.setState({
      selectedGood: null,
      header: null,
    });
  }

  render() {
    const { header } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {` ${header || ''}`}

          <button
            className="button--clear"
            type="button"
            onClick={this.clearSelectedGood}
          >
            x
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(product => (
            <li
              className="list__item"
              key={product}
            >
              <span>
                {product}
              </span>
              <button
                type="button"
                className="list__button"
                onClick={(event) => {
                  this.markSelectedGood(event, product);
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
