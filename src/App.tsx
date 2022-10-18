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
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (newState: string) => (
    this.setState({ selectedGood: newState })
  );

  removeGood = () => (
    this.setState({ selectedGood: '' })
  );

  render() {
    const { selectedGood } = this.state;
    const { selectGood, removeGood } = this;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={removeGood}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const goodSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': goodSelected,
                  })}
                >
                  <td>
                    {goodSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={removeGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => (
                            selectGood(good)
                          )}
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
