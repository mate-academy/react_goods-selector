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

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: '',
  };

  handleGoodSelection = (selectedGood: string) => {
    this.setState({ selectedGood });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title">
          {selectedGood || 'No goods selected'}

          {selectedGood !== '' && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              title="Clear selected good"
              aria-label="Clear selected good"
              onClick={() => this.handleGoodSelection('')}
            />
          )}

        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${selectedGood === good ? 'is-info' : ''}`}
                    onClick={() => this.handleGoodSelection(good)}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
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
