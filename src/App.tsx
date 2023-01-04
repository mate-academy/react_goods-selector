/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
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
  state = {
    selectedGood: 'Jam',
  };

  clearButtonHandler = () => {
    this.setState({ selectedGood: '' });
  };

  addButtonHandler = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              onClick={this.clearButtonHandler}
              data-cy="ClearButton"
              type="button"
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
                className={cn(
                  { 'has-background-success-light': selectedGood === good },
                )}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        onClick={this.clearButtonHandler}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"

                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => this.addButtonHandler(good)}
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
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
