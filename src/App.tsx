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
  selected: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selected: ['Jam'],
  };

  clear = () => {
    this.setState({ selected: [] });
  };

  toggle = (product: string) => {
    const { selected } = this.state;

    if (selected.includes(product)) {
      this.setState({
        selected: selected.filter(goods => goods !== product),
      });
    } else {
      this.setState({ selected: [...selected, product] });
    }
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {'Selected goods: '}
          <span>{selected.join(', ')}</span>
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
