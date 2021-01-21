import React from 'react';
import './App.scss';

const goodsFromServer = [
  'Juice',
  'Carrot',
  'Soy sauce',
  'Ice cream',
  'Apple',
  'Bread',
  'Tahini',
  'Maple syrup',
  'Jam',
  'Garlic',
  'Chewing gum',
  'Soda',
];

class App extends React.Component {
  state = {
    selectedGood: '',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <header className="header">
          <h1 className="header__heading">
            Selected good:
            {' '}
            {selectedGood}
          </h1>
          {selectedGood
          && (
            <button
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
              className="header__button"
              type="button"
            >
              X
            </button>
          )}
        </header>
        <main className="main">
          {goodsFromServer.map(product => (
            <div
              className={
                (product === selectedGood)
                  ? 'product class1'
                  : 'product'
              }
            >
              <h3>{product}</h3>
              <button
                onClick={() => {
                  this.setState({ selectedGood: product });
                }}
                className="product__button"
                type="button"
              >
                Buy
              </button>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
