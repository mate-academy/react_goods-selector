import React from 'react';
import classNames from 'classnames';
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
    selected: [],
  };

  clear = () => {
    this.setState({ selected: [] });
  };

  toggle = (product) => {
    const { selected } = this.state;

    selected.includes(product)
      ? this.setState({
        selected: selected.filter(goods => goods !== product),
      })
      : this.setState({ selected: [...selected, product] });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {'Selected goods: '}
          {<span>{selected.join(', ')}</span>}
        </h1>

        {selected.length !== 0 && (
          <button
            type="button"
            className="button"
            onClick={this.clear}
          >
            Clear
          </button>
        )}

        <ul className="products">
          {goodsFromServer.map(product => (
            <li
              key={product}
              className={classNames('products__item', {
                active: selected.includes(product),
              })}
            >
              <span>{product}</span>

              <button
                onClick={() => this.toggle(product)}
                className="button products__button"
                type="button"
              >
                {selected.includes(product) ? '-' : '+'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
