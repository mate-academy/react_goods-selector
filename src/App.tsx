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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  handleSelectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleRemoveGood = (good: string) => {
    if (this.state.selectedGood === good) {
      this.setState({ selectedGood: '' });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            {selectedGood !== '' && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.handleRemoveGood(selectedGood);
                }}
              />
            )}
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good, index) => {
              return (
                <tr
                  key={index}
                  data-cy="Good"
                  className={
                    selectedGood === good ? 'has-background-success-light' : ''
                  }
                >
                  <td>
                    {selectedGood === good ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          this.handleRemoveGood(good);
                        }}
                      >
                        -
                      </button>
                    ) : (
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
