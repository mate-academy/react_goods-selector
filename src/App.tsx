/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
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
    isSelected: true,
  };

  handleClick = (good: string) => {
    this.setState({
      selectedGood: good,
      isSelected: true,
    });
  };

  clearClick = () => {
    this.setState({
      selectedGood: '',
      isSelected: false,
    });
  };

  render() {
    const { selectedGood } = this.state;

    const newTableGoods = goods.map(good => {
      return good === selectedGood ? (
        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              onClick={this.clearClick}
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      ) : (
        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={() => {
                this.handleClick(good);
              }}
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      );
    });

    return (
      <main className="section container">
        {!this.state.isSelected ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearClick}
            ></button>
          </h1>
        )}
        <table className="table">
          <tbody>{newTableGoods}</tbody>
        </table>
      </main>
    );
  }
}
