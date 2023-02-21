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

  emptyState = () => {
    this.setState({ selectedGood: '' });
  };

  changeGood = (selectedGood: string, good: string) => {
    if (selectedGood === good) {
      this.emptyState();
    } else {
      this.setState({ selectedGood: good });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                <button
                  aria-label=" "
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.emptyState}
                />
              </h1>
            )
            : (
              <h1 className="title">
                No goods selected
              </h1>
            )
        }
        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': selectedGood === good,
                  })}
                >
                  <td>
                    <button
                      data-cy={
                        selectedGood === good ? 'RemoveButton' : 'AddButton'
                      }
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': selectedGood === good },
                      )}
                      onClick={() => {
                        this.changeGood(selectedGood, good);
                      }}
                    >
                      {
                        selectedGood === good
                          ? '-'
                          : '+'
                      }
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
