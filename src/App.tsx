import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

type State = {
  selectedGood: string
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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleAddGood = (good: string) => (
    this.setState({ selectedGood: good })
  );

  handleClearGood = () => this.setState({ selectedGood: '' });

  render() {
    const { selectedGood } = this.state;
    const { handleAddGood, handleClearGood } = this;

    return (
      <main className="section container">
        {selectedGood.length
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleClearGood}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>) }

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isGoodSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isGoodSelected,
                  })}
                >
                  <td>
                    {isGoodSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={handleClearGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={(() => (
                            handleAddGood(good)
                          ))}
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
