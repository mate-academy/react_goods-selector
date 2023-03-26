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

type State = {
  selectedGood: string,
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  changeGood = (product: string) => {
    this.setState({ selectedGood: product });
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const { changeGood: setGood, clearGood } = this;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearGood}
                aria-label="clear"
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(product => {
              const isSelected = product === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={product}
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {!isSelected
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => setGood(product)}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={clearGood}
                        >
                          -
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
