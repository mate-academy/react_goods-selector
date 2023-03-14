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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  // eslint-disable-next-line
  handler = (good: string) => {
    this.setState({
      // eslint-disable-next-line
      selectedGood: good,
    });
  };

  clearButton = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render(): React.ReactNode {
    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood
            ? (
              <>
                {`${this.state.selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearButton}
                />
              </>
            )
            : (
              'No goods selected'
            )}

        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={(this.state.selectedGood === good)
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={(this.state.selectedGood === good)
                      ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={(this.state.selectedGood === good)
                      ? 'button is-info' : 'button'}
                    onClick={() => {
                      this.handler(good);
                    }}
                  >
                    {(this.state.selectedGood === good) ? '-' : '+'}
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
