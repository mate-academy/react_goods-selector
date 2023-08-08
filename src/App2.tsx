import React from 'react';
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
  selectedGood: string
}

export class App2 extends React.Component<{}, State> {
  state: State = {
    selectedGood: '',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title">
          {selectedGood || 'No goods selected'}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            title="Clear selected good"
            aria-label="Clear selected good"
          />
        </h1>

        <table className="table">
          <tbody>
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                aria-label="Add a new item"
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {goods.map((good) => (
                <button
                  key={good}
                  type="button"
                  className="button"
                  aria-label={good}
                >
                  {good}
                </button>
              ))}
            </td>
          </tbody>
        </table>
      </main>
    );
  }
}
