import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

type State = {
  selectedGood: string;
};

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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        { this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              <button // eslint-disable-line
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': (selectedGood === good),
                  },
                )}
              >
                <td>
                  <button
                    data-cy={classNames(
                      {
                        RemoveButton: (selectedGood === good),
                        AddButton: !(selectedGood === good),
                      },
                    )}
                    type="button"
                    className={classNames('button',
                      {
                        'is-info': (selectedGood === good),
                      })}
                    onClick={() => {
                      selectedGood === good // eslint-disable-line
                        ? this.setState({ selectedGood: '' })
                        : this.setState({ selectedGood: good });
                    }}
                  >
                    {selectedGood !== good ? '+' : '-'}
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
