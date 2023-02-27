import React, { Component } from 'react';
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
  selectedGoods: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: 'Jam',
  };

  clear = () => {
    this.setState({ selectedGoods: '' });
  };

  toggle = (element: React.SyntheticEvent) => {
    const item
    = element.currentTarget.parentElement?.nextElementSibling?.innerHTML;

    if (this.state.selectedGoods === item) {
      this.clear();
    } else {
      this.setState({ selectedGoods: item || '' });
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {selectedGoods
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGoods} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clear}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGoods === good,
                })}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={classNames('button',
                      { 'is-info': selectedGoods === good })}
                    onClick={this.toggle}
                  >
                    {selectedGoods === good
                      ? '-'
                      : '+'}
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
