import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  };

  clear = () => {
    this.setState({
      selectedGood: null,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="header">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
        </h1>

        <button
          type="button"
          className={classNames('button', { hover: !selectedGood })}
          onClick={this.clear}
        >
          X
        </button>

        <ul className="products">
          {goodsFromServer.map(product => (

            <li
              key={product}
              className={classNames('products__item',
                { selected: selectedGood === product })}
            >
              {product}

              <button
                type="button"
                className={classNames('button',
                  { hover: selectedGood === product })}
                onClick={() => {
                  this.setState({
                    selectedGood: product,
                  });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
