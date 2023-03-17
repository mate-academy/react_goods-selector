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

export class App extends React.Component {
  state: State = {
    selectedGood: 'Jam',
  };

  handleChangeGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleRemoveGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const { handleChangeGood, handleRemoveGood } = this;

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
                onClick={handleRemoveGood}
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
              const isEqual = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    {
                      'has-background-success-light': isEqual,
                    },
                  )}
                >
                  <td>
                    {isEqual
                      ? (
                        <button
                          onClick={handleRemoveGood}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          onClick={() => handleChangeGood(good)}
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
