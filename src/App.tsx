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
  selectedWord: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedWord: 'Jam',
  };

  render() {
    const { selectedWord } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            selectedWord === '' ? 'No items'
              : `${selectedWord} is selected`
          }
          {selectedWord && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={(event) => {
                if (event.currentTarget) {
                  this.setState({ selectedWord: '' });
                }
              }}
            />
          )}
        </h1>
        <table
          className="table"
        >
          <tbody>

            {goods.map(item => (
              <tr
                data-cy="Good"
                className={selectedWord === item
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.setState({
                      selectedWord: item,
                    })}
                  >
                    {selectedWord === item ? '-' : '+'}
                  </button>
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
