/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

type State = {
  selectedGood: string
};

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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const successBg = 'has-background-success-light';

    return (
      <main className="section container">
        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={classNames({ [successBg]: selectedGood === good })}
                  key={good}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.setState({ selectedGood: '' })}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.setState({ selectedGood: good })}
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
