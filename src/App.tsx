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

interface State {
  selectedGood: string,
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleGoodSelection = (good: string) => {
    this.setState({ selectedGood: good });
  };

  isSelected = (good: string) => {
    return good === this.state.selectedGood;
  };

  render() {
    const { selectedGood } = this.state;
    const { isSelected } = this;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                aria-label="Clear"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.handleGoodSelection('');
                }}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected(good)
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {isSelected(good)
                    ? (
                      <button
                        data-cy="RemoveButton"
                        className="button is-info"
                        type="button"
                        onClick={() => {
                          this.handleGoodSelection('');
                        }}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.handleGoodSelection(good);
                        }}
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
