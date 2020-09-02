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

  addSelection = (event, product) => {
    this.setState({ item: product });
    if (event.ctrlKey) {
      const order = this.state.item;

      const addToList = prop => (
        !prop.includes(product)
          ? `${prop} ${product}`
          : prop
      );

      this.setState({ item: addToList(order) });
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <h3
            className="heading"
          >
            Selected good:
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
          </h3>
          {goodsFromServer.length}
        </div>
        <ul className="goods">
          {
            goodsFromServer.map(product => (
              <li
                key={product}
                className={
                  `goods__item 
                  ${this.state.item.includes(product)
                ? 'goods__item--active'
                : ''}
                  `}
              >
                {product}
                <button
                  type="button"
                  className="goods__button"
                  onClick={(event) => {
                    this.addSelection(event, product);
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
