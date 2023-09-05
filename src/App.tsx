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
  selectedGood: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearGood = () => this.setState({ selectedGood: null });

  selectGood = (selectedGood: string) => this.setState({ selectedGood });

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearGood}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(goodie => (
              <tr
                data-cy="Good"
                key={goodie}
                className={
                  (selectedGood === goodie)
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  {
                    (selectedGood === goodie)
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.clearGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.selectGood(goodie)}
                        >
                          +
                        </button>
                      )
                  }
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodie}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
