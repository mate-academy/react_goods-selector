import { Component } from 'react';
import cn from 'classnames';

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
  selectedGood: string | null;
};

// eslint-disable-next-line react/prefer-stateless-function
export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClick = (product: string) => (
    () => this.setState({ selectedGood: product })
  );

  handleClear = () => (
    () => this.setState({ selectedGood: null })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-products-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete"
              onClick={this.handleClear()}
            />
          )}

        </h1>

        <table className="table">
          <tbody className="tbody">
            {goods.map((product) => {
              const isSelected = selectedGood === product;

              return (
                <tr
                  key={product}
                  data-cy="Good"
                  className={cn({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {isSelected ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button active-btn"
                        onClick={this.handleClear()}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={this.handleClick(product)}
                      >
                        +
                      </button>
                    )}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {product}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
