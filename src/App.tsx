/* eslint-disable jsx-a11y/control-has-associated-label */
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
  selectedWord: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedWord: 'Jam',
  };

  buttonResetHandler = () => {
    this.setState({ selectedWord: '' });
  };

  buttonSelectHandler = (good: string) => {
    return (
      this.setState({
        selectedWord: good,
      })
    );
  };

  render() {
    const { selectedWord } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            selectedWord === '' ? 'No goods selected'
              : `${selectedWord} is selected`
          }
          {selectedWord && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.buttonResetHandler}
            />
          )}
        </h1>
        <table
          className="table"
        >
          <tbody>

            {goods.map(item => (
              <tr
                key={item}
                data-cy="Good"
                className={classNames('', {
                  'has-background-success-light': selectedWord === item,
                })}
              >
                <td>
                  {selectedWord !== item
                    ? (
                      <button
                        type="button"
                        className="button"
                        id="#1"
                        onClick={() => this.buttonSelectHandler(item)}
                      >
                        +
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        className="button is-info"
                        onClick={() => this.buttonSelectHandler('')}
                      >
                        -
                      </button>
                    )}
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                  key={item}
                >
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
