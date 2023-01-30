import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  selectedGood: string
};

export const goods: string[] = [
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;
    const { clearGood, addGood } = this;

    return (
      <main className="section container">
        {
          selectedGood === ''
            ? <h1 className="title">No goods selected</h1>
            : (
              <div className="is-flex is-align-items-center">
                <h1 className="title mb-0">{`${selectedGood} is selected`}</h1>
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={clearGood}
                >
                  {}
                </button>
              </div>
            )
        }

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}

        <table className="table">
          <tbody>
            {
              goods.map((good) => (
                selectedGood === good
                  ? (
                    <tr
                      data-cy="Good"
                      className="has-background-success-light"
                      key={good}
                    >
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={clearGood}
                        >
                          -
                        </button>
                      </td>

                      <td data-cy="GoodTitle" className="is-vcentered">
                        {good}
                      </td>
                    </tr>
                  )
                  : (
                    <tr data-cy="Good" key={good}>
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          value={good}
                          onClick={() => addGood(good)}
                        >
                          +
                        </button>
                      </td>

                      <td data-cy="GoodTitle" className="is-vcentered">
                        {good}
                      </td>
                    </tr>
                  )
              ))
            }
          </tbody>
        </table>
      </main>
    );
  }
}
