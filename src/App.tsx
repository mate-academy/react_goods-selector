/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
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
  className: string,
  blueLight: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    className: 'has-background-success-light',
    blueLight: 'is-info',
  };

  render() {
    const {
      selectedGood,
      className,
      blueLight,
    } = this.state;

    return (
      <main className="section container">
        {selectedGood === ''
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState(
                  { selectedGood: '' },
                )}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  selectedGood === good
                    ? className
                    : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      `button ${
                        selectedGood === good
                          ? blueLight
                          : ''
                      }`
                    }
                    onClick={() => (
                      selectedGood === good
                        ? this.setState({ selectedGood: '' })
                        : this.setState({
                          selectedGood: good,
                          className: 'has-background-success-light',
                          blueLight: 'is-info',
                        })
                    )}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
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
