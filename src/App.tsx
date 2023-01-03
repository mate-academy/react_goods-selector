import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  resetSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  setSelectedGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    return (
      <main className="card section container">
        {this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.resetSelectedGood}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good: string) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light ':
                    this.state.selectedGood === good,
                })}
              >
                <td>
                  {this.state.selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info is-rounded"
                        onClick={this.resetSelectedGood}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button is-primary is-outlined is-rounded"
                        onClick={() => {
                          this.setSelectedGood(good);
                        }}
                      >
                        +
                      </button>
                    )}
                </td>
                <td data-cy="GoodTitle">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer>
          <div className="content has-text-centered">
            <p>
              <strong>Homework</strong>
              {' by '}
              <a href="https://github.com/RedkoSerhii">Serhii Redko.</a>
              <br />
              The source code is licensed
              <a href="https://mate.academy/"> Mate Academy</a>
            </p>
          </div>
        </footer>
      </main>
    );
  }
}
