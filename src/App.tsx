/* eslint-disable jsx-a11y/control-has-associated-label */
import 'bulma/css/bulma.css';
import './App.scss';
import React from 'react';

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
    isGoodSelected: true,
  };

  handleSelect = (item: React.SetStateAction<string>) => {
    this.setState({ selectedGood: item, isGoodSelected: true });
  };

  handleClearClick = () => {
    this.setState({ selectedGood: '', isGoodSelected: false });
  };

  render() {
    const { selectedGood, isGoodSelected } = this.state;

    const goodsElements = goods.map(good => (
      <tr
        data-cy="Good"
        className={selectedGood === good ? 'has-background-success-light' : ''}
      >
        <td>
          {selectedGood !== good
            ? (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => this.handleSelect(good)}
              >
                +
              </button>
            )
            : (
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={this.handleClearClick}
              >
                -
              </button>
            )}
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    ));

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.isGoodSelected ? `${selectedGood} is selected` : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {isGoodSelected
            && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClearClick}
              />
            )}

        </h1>

        <table className="table">
          <tbody>
            {goodsElements}
          </tbody>
        </table>
      </main>
    );
  }
}
