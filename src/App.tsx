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

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === '' ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            {selectedGood !== '' && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
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
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}

            <tr data-cy="Good">
              <td>
                <button data-cy="AddButton" type="button" className="button">
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Dumplings
              </td>
            </tr>
            <tr data-cy="Good" className="has-background-success-light">
              <td>
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Jam
              </td>
            </tr>
            <tr data-cy="Good">
              <td>
                <button data-cy="AddButton" type="button" className="button">
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Garlic
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}
