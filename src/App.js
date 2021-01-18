import React from 'react';
import classNames from 'classnames';
import './App.scss';

// import { Product } from './components/Product/Product';

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
    selected: [],
  }

  clear = () => {
    this.setState({ selected: [] });
  }

  toggle = (product) => {
    const { selected } = this.state;

    selected.includes(product)
      ? this.setState({ selected: selected.filter(good => good !== product) })
      : this.setState({ selected: [...selected, product] });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {'Selected goods: '}
          {<span>{selected.join(', ')}</span>}
        </h1>

        <button
          onClick={this.clear}
          className="button products__button"
          type="button"
        >
          +
        </button>

        <ul className="products__list">
          {goodsFromServer.map(product => (
            <li
              key={product}
              className={classNames(
                'products__item',
                { active: selected.includes(product) },
              )}
            >
              <span>{product}</span>
              <button
                onClick={() => this.toggle(product)}
                className="button products__item-button"
                type="button"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
