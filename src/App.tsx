import { Component } from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';
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

  handleClear = () => this.setState({ selectedGood: '' });

  handleSelectedGood = (good: string) => this.setState({ selectedGood: good });

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood.length
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {
            selectedGood && (
              <button
                aria-label="button"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            )

          }
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelectedGood = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={cn('', {
                    'has-background-success-light': isSelectedGood,
                  })}
                >
                  <td>
                    <button
                      data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={cn('button', {
                        'is-info': isSelectedGood,
                      })}
                      onClick={() => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        isSelectedGood
                          ? this.handleClear()
                          : this.handleSelectedGood(good);
                      }}
                    >
                      {isSelectedGood ? '-' : '+'}
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
