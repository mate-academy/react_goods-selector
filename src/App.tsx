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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  setGood = (good: string): void => {
    this.setState({ selectedGood: good });

    if (this.state.selectedGood === good) {
      this.setState({ selectedGood: '' });
    }
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    const goodIsSelectedMessage = (
      <h1 className="title is-flex is-align-items-center">
        {`${selectedGood} is selected`}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={this.removeGood}
        >
          &#8291;
        </button>
      </h1>
    );

    return (
      <main className="section container">
        <h1 className="title">
          {
            selectedGood
              ? goodIsSelectedMessage
              : 'No goods selected'
          }
        </h1>

        <table className="table">
          <tbody>

            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={classNames('button', {
                      'is-info': selectedGood === good,
                    })}
                    onClick={() => this.setGood(good)}
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
