import React from 'react';
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

function message(products: string[]): string {
  if (products.length === 0) {
    return 'No goods selected';
  }

  if (products.length === 1) {
    return `${products[0]} is selected`;
  }

  return `${products.slice(0, -1).join(', ')} and ${products.slice(-1)} are selected`;
}

type State = {
  selected: string[],
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selected: ['Jam'],
  };

  clear = () => {
    this.setState({ selected: [] });
  };

  addProducts = (product: string) => {
    this.setState(prevState => ({
      selected: [...prevState.selected, product],
    }));
  };

  removeProducts = (product: string) => {
    this.setState(prevState => ({
      selected: prevState.selected.filter(element => element !== product),
    }));
  };

  buttonText = (select: boolean, product: string) => {
    return select
      ? this.removeProducts(product)
      : this.addProducts(product);
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {message(selected)}
        </h1>

        <ul className="card">
          {goodsFromServer.map(product => {
            const select = selected.includes(product);
            const textButton = select ? 'Remove' : 'Select';

            return (
              <div>
                <li key={product} className="card__product">
                  {product}
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.buttonText(select, product)}
                  >
                    {textButton}
                  </button>
                </li>
              </div>
            );
          })}
        </ul>

        {selected.length > 0 && (
          <button
            className="button__clear"
            type="button"
            onClick={this.clear}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
