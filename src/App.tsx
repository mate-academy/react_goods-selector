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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleButton = (good: string) => {
    if (this.state.selectedGood === good) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: good });
    }
  };

  clearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {/* <h1 className="title">No goods selected</h1> */}

        <h1 className="title is-flex is-align-items-center">
          {selectedGood.length === 0
            ? 'No goods selected'
            : `${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="Clear selection"
              onClick={this.clearButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={good === selectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={good === selectedGood
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => this.handleButton(good)}
                  >
                    {good === selectedGood
                      ? '-'
                      : '+'}
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
