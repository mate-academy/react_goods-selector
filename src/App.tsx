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

type Good = (typeof goods)[number];

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  handleGoodSelect = (good: Good) => {
    this.setState({ selectedGood: good });
  };

  handleClearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  addButton = (good: Good) => (
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={() => this.handleGoodSelect(good)}
    >
      +
    </button>
  );

  removeButton = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => this.handleClearSelection()}
    >
      -
    </button>
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          {selectedGood && this.removeButton}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {selectedGood === good
                    ? this.removeButton
                    : this.addButton(good)}
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
