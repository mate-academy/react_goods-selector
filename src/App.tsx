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

  handleOnClickDelete = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood !== ''
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleOnClickDelete}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={this.state.selectedGood === good
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
                        onClick={this.handleOnClickDelete}
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
                          this.setState({ selectedGood: good });
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
