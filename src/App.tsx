import { Component } from 'react';
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

  clearGoods = () => this.setState({ selectedGood: '' });

  handleSelectedGood = (good: string) => this.setState({ selectedGood: good });

  render() {
    const { selectedGood } = this.state;
    const selectedClass = 'has-background-success-light';

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood.length ? `${selectedGood} is selected` : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {
            selectedGood
            && (
              <button
                aria-label="button"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearGoods}
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
                  className={(isSelectedGood && selectedClass) || ''}
                >
                  <td>
                    <button
                      data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={isSelectedGood ? 'button is-info' : 'button'}
                      onClick={() => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        isSelectedGood
                          ? this.clearGoods()
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
