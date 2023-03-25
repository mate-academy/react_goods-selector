import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

type State = {
  selectedGood: string,
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

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleAddGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handleRemoveGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={
          classNames(
            'title', { 'title is-flex is-align-items-center': selectedGood },
          )
        }
        >
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleRemoveGood}
              aria-label="clear"
            />
          )}
        </h1>

        <table className="table">
          <tbody>

            {goods.map(good => {
              const selected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    'Good',
                    { 'has-background-success-light': selected },
                  )}
                >
                  <td>
                    {selected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleRemoveGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.handleAddGood(good);
                          }}
                        >
                          +
                        </button>
                      )}
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
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
