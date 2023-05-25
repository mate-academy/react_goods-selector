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
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  handler = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handlerClear = () => {
    this.setState({
      selectedGood: '',
    });
  };

  handlerClearButton = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === ''
          ? (<h1 className="title">No goods selected</h1>)
          : (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' '}
              is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handlerClearButton}
              />
            </h1>
          )}

        <ul>
          {goods.map(good => (
            <li
              key={good}
            >
              <table className="table">
                <tbody>
                  {selectedGood === good
                    ? (
                      <tr
                        data-cy="Good"
                        className="has-background-success-light"
                      >
                        <td>
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={() => {
                              this.handlerClear();
                            }}
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
                      <tr data-cy="Good">
                        <td>
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => {
                              this.handler(good);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td data-cy="GoodTitle" className="is-vcentered">
                          {good}
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
