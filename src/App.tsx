import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods: string[] = [
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
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    const clearTitle = () => {
      this.setState({ selectedGood: '' });
    };

    const removeOrSelectGood = (good: string) => (
      selectedGood === good
        ? this.setState({ selectedGood: '' })
        : this.setState({ selectedGood: good })
    );

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={clearTitle}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {goods.map(good => {
              const targetGood = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    classNames(
                      '', {
                        'has-background-success-light': targetGood,
                      },
                    )
                  }
                >
                  <td>
                    <button
                      id={good}
                      data-cy={
                        targetGood
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        classNames(
                          'button',
                          { 'is-info': targetGood },
                        )
                      }
                      onClick={() => {
                        removeOrSelectGood(good);
                      }}
                    >
                      {
                        targetGood
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
