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

  setGood = (event: React.MouseEvent<HTMLButtonElement>) => {
    const goodName = event.currentTarget.closest('tr')
      ?.querySelector('.is-vcentered')
      ?.textContent;

    this.setState({ selectedGood: goodName });

    if (this.state.selectedGood === goodName) {
      this.setState({ selectedGood: '' });
    }
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    const goodIsSelectedMessage = (
      <h1 className="title is-flex is-align-items-center">
        {selectedGood}
        {' is selected'}

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={this.removeGood}
        />
      </h1>
    );

    return (
      <main className="section container">
        <h1 className="title">
          {
            selectedGood
              ? goodIsSelectedMessage
              : 'No goods selected'
          }
        </h1>

        <table className="table">
          <tbody>

            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={selectedGood === good
                      ? 'button is-info'
                      : 'button'}
                    onClick={this.setGood}
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
