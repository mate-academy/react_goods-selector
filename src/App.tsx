/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  get oneGood(): string {
    return this.state.selectedGoods;
  }

  isSelected = (item: string) => this.oneGood === item;

  select = (item: string) => {
    return this.isSelected(item)
      ? this.setState({ selectedGoods: '' })
      : this.setState({ selectedGoods: item });
  };

  addClearButton = () => {
    return (
      <button
        aria-label="ClearButton"
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => {
          this.setState({ selectedGoods: '' });
        }}
      />
    );
  };

  addButtonAdd = (item:string) => {
    return (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => this.select(item)}
      >
        +
      </button>
    );
  };

  addButtonRemove = (item:string) => {
    return (
      <button
        data-cy="RemoveButton"
        type="button"
        className="button is-info"
        onClick={() => this.select(item)}
      >
        -
      </button>
    );
  };

  render() {
    return (
      <main className="section container">
        <h1
          className="
            title is-flex
            is-align-items-center
          "
        >
          {this.oneGood
            ? `${this.oneGood} is selected`
            : 'No goods selected'}

          {this.oneGood && this.addClearButton()}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                className={classNames('', {
                  'has-background-success-light': (this.isSelected(item)),
                })}
              >
                <td>
                  {this.isSelected(item)
                    ? this.addButtonRemove(item)
                    : this.addButtonAdd(item)}
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
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
