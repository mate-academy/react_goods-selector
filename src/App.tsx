import { Component } from 'react';
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
export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  removeGood = () => this.setState({ selectedGood: '' });

  selectGood = (name: string) => this.setState({ selectedGood: name });

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeGood}
                />
              </h1>
            )
            : (
              <h1 className="title">No goods selected</h1>
            )
        }

        <table className="table">
          <tbody>
            {goods.map(product => {
              const isGoodSelected = product === selectedGood;

              return (
                (
                  <tr
                    key={product}
                    data-cy="Good"
                    className={classNames(
                      { 'has-background-success-light': isGoodSelected },
                    )}
                  >
                    <td>
                      {
                        isGoodSelected
                          ? (
                            <button
                              data-cy="RemoveButton"
                              type="button"
                              className="button is-info"
                              onClick={this.removeGood}
                            >
                              -
                            </button>
                          )
                          : (
                            <button
                              data-cy="AddButton"
                              type="button"
                              className="button"
                              onClick={() => this.selectGood(product)}
                            >
                              +
                            </button>
                          )
                      }
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {product}
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
