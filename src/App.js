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
    item: '',
  }

  render() {
    return (
      <>
        <div className="App">
          <h1
            className="heading"
          >
            Selected good: -
            {' '}
            {this.state.item}
            {this.state.item
              ? (
                <button
                  type="button"
                  className="heading__remove"
                  onClick={() => {
                    this.setState({ item: '' });
                  }}
                >
                  X
                </button>
              )
              : ''
            }
          </h1>
          {goodsFromServer.length}
        </div>
        <ul className="goods goods__list">
          {
            goodsFromServer.map(product => (
              <li
                key={product}
                className="goods__item"
              >
                {product}
                <button
                  type="button"
                  className="goods__button"
                  onClick={(event) => {
                    this.setState({ item: product });
                  }}
                >
                  Pick
                </button>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default App;
