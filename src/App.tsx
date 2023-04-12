import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

export class App extends Component {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {this.state.selectedGood.length
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': good === selectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={cn(
                      { AddButton: good !== selectedGood },
                      { RemoveButton: good === selectedGood },
                    )}
                    type="button"
                    className={cn(
                      'button',
                      { 'is-info': good === selectedGood },
                    )}
                    onClick={() => {
                      if (selectedGood === good) {
                        this.setState({ selectedGood: '' });
                      } else {
                        this.setState({ selectedGood: good });
                      }
                    }}
                  >
                    {good === selectedGood ? '-' : '+'}
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
