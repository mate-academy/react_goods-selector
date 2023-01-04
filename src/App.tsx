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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  clearGoods = () => {
    this.setState({ selectedGood: '' });
  };

  addGoods = (product: string) => {
    this.setState({ selectedGood: product });
  };

  render() {
    const { selectedGood } = this.state;

    const title = selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';

    return (
      <main className="section container">
        <h1 className="title">
          {title}
        </h1>

        <h1 className="title is-flex is-align-items-center">
          {selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearGoods}
            />
          )}
        </h1>

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
                  {selectedGood !== product && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.addGoods(product)}
                    >
                      +
                    </button>
                  )}

                  {selectedGood === product && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => this.clearGoods()}
                    >
                      -
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
