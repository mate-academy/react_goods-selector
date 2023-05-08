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
  selectedGood: string | null;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClear = () => {
    this.setState({ selectedGood: null });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                onClick={this.handleClear}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
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
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={selectedGood === good
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          onClick={this.handleClear}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          onClick={() => this.handleClick(good)}
                          data-cy="AddButton"
                          type="button"
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
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
