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

interface State {
  selectedGood: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClear = () => this.setState({ selectedGood: null });

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected` }
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy={selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={selectedGood === good
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => {
                      this.setState({ selectedGood: good });
                      if (selectedGood === good) {
                        this.handleClear();
                      }
                    }}
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
