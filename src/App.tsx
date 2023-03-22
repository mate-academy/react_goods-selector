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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleSelectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleRemoveGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            selectedGood
              ? (
                <>
                  {`${selectedGood} is selected`}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                    onClick={this.handleRemoveGood}
                  >
                    {}
                  </button>
                </>
              )
              : 'No goods selected'
          }
        </h1>
        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={classNames(
                    {
                      'has-background-success-light': selectedGood === good,
                    },
                  )}
                  key={good}
                >
                  <td>
                    {selectedGood === good
                      ? (

                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleRemoveGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.handleSelectGood(good)}
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
