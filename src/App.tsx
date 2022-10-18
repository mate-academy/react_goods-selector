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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectProduct = (product: string) => {
    this.setState({ selectedGood: product });
  };

  deselectProduct = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.deselectProduct}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(product => (
              <tr
                data-cy="Good"
                key={product}
                className={
                  classNames({
                    'has-background-success-light': selectedGood === product,
                  })
                }
              >
                {selectedGood === product
                  ? (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.deselectProduct}
                      >
                        -
                      </button>
                    </td>
                  )
                  : (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.selectProduct(product);
                        }}
                      >
                        +
                      </button>
                    </td>
                  )}

                <td data-cy="GoodTitle" className="is-vcentered">
                  {product}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
