/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  ClearButton = () => {
    this.setState({ selectedGoods: '' });
  };

  switcher(word: string) {
    if (word === this.state.selectedGoods) {
      this.setState({ selectedGoods: '' });
    } else {
      this.setState({ selectedGoods: word });
    }
  }

  render(): React.ReactNode {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGoods ? `${selectedGoods} is selected` : 'No goods selected'}

          {selectedGoods && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.ClearButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': selectedGoods === good,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGoods !== good ? 'AddButton' : 'RemoveButton'
                    }
                    type="button"
                    className={classNames({
                      button: selectedGoods !== good,
                      'button is-info': selectedGoods === good,
                    })}
                    onClick={() => this.switcher(good)}
                  >
                    {selectedGoods !== good ? '+' : '-'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
