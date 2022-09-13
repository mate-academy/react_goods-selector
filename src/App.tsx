/* eslint-disable jsx-a11y/control-has-associated-label */
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

export class App extends Component {
  state: { selectedGood: string } = {
    selectedGood: 'Jam',
  };

  render() {
    const handleSelectGood = (good: string) => {
      this.setState({ selectedGood: good });
    };

    return (
      <main className="section container">

        {this.state.selectedGood === ''
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}

              {this.state.selectedGood && (
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => handleSelectGood('')}
                />
              )}
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={good === this.state.selectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {this.state.selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => handleSelectGood('')}
                      >
                        -

                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => handleSelectGood(good)}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
