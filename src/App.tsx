import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  insertSelectedProductToTitle = (selectedGood: string) => {
    if (selectedGood) {
      return (
        <>
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            aria-label="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={this.clearSelectedProduct}
          />
        </>
      );
    }

    return (
      'No goods selected'
    );
  };

  clearSelectedProduct = (): void => {
    this.setState({ selectedGood: '' });
  };

  getSelectedProduct = (product: string) => {
    if (this.state.selectedGood === product) {
      this.clearSelectedProduct();
    } else {
      this.setState({ selectedGood: product });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className={classNames('title', {
          'is-flex': selectedGood,
          'is-align-items-center': selectedGood,
        })}
        >
          {this.insertSelectedProductToTitle(selectedGood)}
        </h1>
        <table className="table">
          <tbody>
            {goods.map(product => (
              <tr
                key={product}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': product === selectedGood },
                )}
              >
                <td>
                  <button
                    type="button"
                    data-cy={
                      product === selectedGood
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    className={classNames('button', {
                      'is-info': product === selectedGood,
                    })}
                    onClick={() => {
                      this.getSelectedProduct(product);
                    }}
                  >
                    {product === selectedGood ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {product}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
