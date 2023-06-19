import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  cleanList = () => {
    this.setState({ selectedGood: '' });
  };

  addToList = (product: string) => {
    this.setState({ selectedGood: product });
  };

  toggleSelectProduct(product: string) {
    const { selectedGood } = this.state;

    const productToSelect = selectedGood === product
      ? ''
      : product;

    this.setState({
      selectedGood: productToSelect,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        { selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.cleanList}
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
                className={classNames({
                  'has-background-success-light': selectedGood === product,
                })}
              >
                <td>
                  {selectedGood === product
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.toggleSelectProduct(product)}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.addToList(product);
                        }}
                      >
                        +
                      </button>
                    )}
                </td>

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
