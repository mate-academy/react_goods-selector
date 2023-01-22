import React from 'react';
import classNames from 'classnames';
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

  addButton = (event: React.MouseEvent<HTMLButtonElement>, good:string) => {
    const target = event.currentTarget;

    target.parentElement?.parentElement?.classList
      .toggle('has-background-success-light');

    this.setState({ selectedGood: good });
  };

  removeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;

    target.parentElement?.parentElement?.classList
      .toggle('has-background-success-light');

    this.setState({ selectedGood: '' });
  };

  clearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <>
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearButton}
              />
            </h1>
          </>
        )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={(event) => {
                          this.removeButton(event);
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
                        onClick={(event) => {
                          this.addButton(event, good);
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
