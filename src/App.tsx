import { Component } from 'react';
import className from 'classnames';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  cleanButton = () => {
    return this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood}
            {' is selected'}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.cleanButton}
            >
              x
            </button>
          </h1>
        )}
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={className({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={className(
                      'button',
                      {
                        'is-info': selectedGood === good,
                      },
                    )}
                    onClick={
                      selectedGood === good
                        ? () => {
                          this.setState({ selectedGood: '' });
                        }
                        : () => {
                          this.setState({ selectedGood: good });
                        }
                    }
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
