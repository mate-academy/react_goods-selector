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
  selectedGood: string
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  delete = () => {
    this.setState({ selectedGood: '' });
  };

  handler = (name: string) => {
    this.setState(
      (prevState) => (
        { selectedGood: name === prevState.selectedGood ? '' : name }
      ),
    );
  };

  render() {
    return (
      <main className="section container">
        {(this.state.selectedGood.length === 0) ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <>
            <h1 className="title is-flex is-align-items-center">
              {this.state.selectedGood}
              {' is selected'}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                id="button"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.delete}
              />
            </h1>
          </>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                className={
                  good === this.state.selectedGood
                    ? 'has-background-success-light'
                    : ''
                }
                data-cy="Good"
              >
                {
                  good === this.state.selectedGood
                    ? (
                      <td>
                        <button
                          onClick={this.delete}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          onClick={() => this.handler(good)}
                          data-cy="AddButton"
                          type="button"
                          className="button"
                        >
                          +
                        </button>
                      </td>
                    )
                }
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
