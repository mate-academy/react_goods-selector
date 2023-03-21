/* eslint-disable jsx-a11y/control-has-associated-label */
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  deleteGoods = () => {
    this.setState({ selectedGood: '' });
  };

  chooseGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.deleteGoods}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isGood = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    { 'has-background-success-light': isGood },
                  )}
                >

                  {isGood
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.deleteGoods}
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
                            this.chooseGood(good);
                          }}
                        >
                          +
                        </button>
                      </td>
                    )}

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
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
