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

export class App extends React.Component {
  state = {
    selectedWord: 'Jam',
  };

  render(): React.ReactNode {
    return (
      <main className="section container">
        {
          !this.state.selectedWord
            ? (
              <h1 className="title">No goods selected</h1>)
            : (
              <h1 className="title is-flex is-align-items-center">
                {`${this.state.selectedWord} `}
                is selected

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label  */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => (
                    this.setState({ selectedWord: '' })
                  )}
                />
              </h1>
            )
        }

        <table className="table">
          <tbody>
            {
              goods.map(good => (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    {
                      'has-background-success-light':
                      this.state.selectedWord === good,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={
                        this.state.selectedWord === good
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={classNames(
                        'button',
                        {
                          'is-info': this.state.selectedWord === good,
                        },
                      )}
                      onClick={() => (
                        this.state.selectedWord === good
                          ? this.setState({ selectedWord: '' })
                          : this.setState({ selectedWord: good })
                      )}
                    >
                      {
                        this.state.selectedWord === good
                          ? ('-')
                          : ('+')
                      }
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    );
  }
}
