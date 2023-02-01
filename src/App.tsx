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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clearSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  addSelectedGood = (good: string) => {
    this.setState({ selectedGood: good });
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
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearSelectedGood}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          key={good}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.clearSelectedGood()}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          key={good}
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.addSelectedGood(good)}
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
