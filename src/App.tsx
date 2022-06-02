import React from 'react';
import cn from 'classnames';
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

type Props = {};

interface State {
  selectedGoods: string[];
}

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  showMessage = (listOfGoods: string[]):string => {
    if (listOfGoods.length === 0) {
      return 'No goods selected';
    }

    if (listOfGoods.length === 1) {
      return `${listOfGoods[0]} is selected`;
    }

    const lastIndex = listOfGoods.length - 1;

    return `${listOfGoods.slice(0, lastIndex).join(', ')} and ${listOfGoods[lastIndex]} are selected`;
  };

  stateToggler = (product: string) => {
    this.setState((prevState) => {
      const stateGoodsCopy = prevState.selectedGoods.slice();

      if (stateGoodsCopy.includes(product)) {
        const index = stateGoodsCopy.indexOf(product);

        stateGoodsCopy.splice(index, 1);
      } else {
        stateGoodsCopy.push(product);
      }

      return { selectedGoods: stateGoodsCopy };
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="content">
        <h1>{this.showMessage(selectedGoods)}</h1>
        {selectedGoods.length > 0 && (
          <button
            className="button is-danger"
            type="button"
            onClick={() => this.setState({ selectedGoods: [] })}
          >
            Clear
          </button>
        )}
        <ul className="mt-4">
          {goodsFromServer.map(product => (
            <li
              className="is-flex is-justify-content-space-between"
              key={product}
            >
              <p className={
                cn({ 'has-background-info': selectedGoods.includes(product) })
              }
              >
                {product}
              </p>
              <button
                type="button"
                className="button is-success is-small"
                onClick={() => this.stateToggler(product)}
              >
                {selectedGoods.includes(product) ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
