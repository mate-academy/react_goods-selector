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

type AppState = {
  selectedGood: string;
};

export class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
    selectedGood: 'Jam',
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  isGoodSelected = (good: string) => {
    return this.state.selectedGood === good;
  };

  render() {
    const { selectedGood } = this.state;
    const { isGoodSelected } = this;

    return (
      <main className="section container">
        {selectedGood ? (
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
        ) : (
          <h1 className="title">
            No goods selected
          </h1>
        )}

        <table className="table">
          <tbody>

            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  isGoodSelected(good)
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  {isGoodSelected(good) ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.removeGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.addGood(good)}
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
