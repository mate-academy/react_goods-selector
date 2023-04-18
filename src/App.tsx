import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

interface State {
  selectedGood: string;
}

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

    return (
      <main className="section container">
        { this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
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
              const isChosen = selectedGood === good;

              return (
                <>
                  <tr
                    data-cy="Good"
                    className={classNames(
                      {
                        'has-background-success-light': isChosen,
                      },
                    )}
                  >
                    <td>
                      <button
                        data-cy={classNames(
                          {
                            AddButton: !isChosen,
                            RemoveButton: isChosen,
                          },
                        )}
                        type="button"
                        className={classNames('button',
                          {
                            'is-info': isChosen,
                          })}
                        onClick={() => {
                          if (isChosen) {
                            this.setState({ selectedGood: '' });
                          } else {
                            this.setState({ selectedGood: good });
                          }
                        }}
                      >
                        {isChosen ? '-' : '+'}
                      </button>
                    </td>

                    <td
                      data-cy="GoodTitle"
                      className="is-vcentered"
                      key={good}
                    >
                      {good}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
