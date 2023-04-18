import { Component } from 'react';
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

interface State {
  selectedGood: string | null,
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((product) => {
              const selectedProduct = product === selectedGood;

              return (
                <tr
                  key={product}
                  data-cy="Good"
                  className={
                    selectedProduct
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={selectedProduct
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={selectedProduct
                        ? 'button is-info'
                        : 'button'}
                      onClick={() => {
                        this.setState({
                          selectedGood: selectedProduct
                            ? null
                            : product,
                        });
                      }}
                    >
                      {selectedProduct
                        ? '-'
                        : '+'}
                    </button>
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
