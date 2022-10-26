/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClearGood = () => this.setState({ selectedGood: '' });

  render() {
    const {
      selectedGood,
    } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames('title', {
            'is-flex is-align-items-center': selectedGood,
          })}
        >
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected' }
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearGood}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  classNames({
                    'has-background-success-light': selectedGood === good,
                  })
                }
              >
                {selectedGood === good
                  ? (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className={classNames('button', {
                          'is-info': selectedGood === good,
                        })}
                        onClick={this.handleClearGood}
                      >
                        -
                      </button>
                    </td>
                  )
                  : (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.setState({ selectedGood: good })}
                      >
                        +
                      </button>
                    </td>
                  )}
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  { good }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
