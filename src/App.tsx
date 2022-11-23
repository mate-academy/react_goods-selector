import { Component } from 'react';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  addGood = (item: string) => {
    this.setState({ selectedGood: item });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const isEmptySelection = selectedGood.length === 0;

    return (
      <main className="section container">

        <h1 className={classNames(
          'title',
          { 'is-flex is-align-items-center': !isEmptySelection },
        )}
        >
          {isEmptySelection
            ? 'No goods selected'
            : (
              <>
                {selectedGood}
                {' is selected'}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeGood}
                />
              </>
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelectedGood = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames({
                    'has-background-success-light': isSelectedGood,
                  })}
                >
                  <td>

                    {isSelectedGood
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.removeGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.addGood(good)}

                        >
                          +
                        </button>
                      )}
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
