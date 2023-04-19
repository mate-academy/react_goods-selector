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

type State = {
  selectedGood: string | null,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClearSelection = () => {
    this.setState({ selectedGood: null });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleGoodSelection = (good: string) => {
    return () => {
      this.selectGood(good);
    };
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood}
            {' is selected'}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              onClick={this.handleClearSelection}
              className="delete ml-3"
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  selectedGood === good
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  {selectedGood === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      onClick={this.handleClearSelection}
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      onClick={this.handleGoodSelection(good)}
                      className="button"
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
