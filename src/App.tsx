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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  addProduct = (product : string) => {
    this.setState({ selectedGood: product });
  };

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.selectedGood || 'Nothing'}
          {' is selected'}
        </h1>

        {this.state.selectedGood && (
          <button
            type="button"
            onClick={this.clearSelection}
          >
            Clear selection
          </button>
        )}

        <ul>
          { goodsFromServer.map(product => (
            <li
              key={product}
              className={classNames('list__item', {
                selected: this.state.selectedGood === product,
              })}
            >
              {product}
              <button
                className={classNames('goods__button', {
                  added: this.state.selectedGood === product,
                })}
                type="button"
                onClick={() => {
                  this.addProduct(product);
                }}
              >
                Select
              </button>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default App;
