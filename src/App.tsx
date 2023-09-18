import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type AppState = {
  selectedGood: string;
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

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            `${selectedGood} is selected`

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearGood}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}
        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  className={
                    isSelected ? 'has-background-success-light' : undefined
                  }
                  data-cy="Good"
                >
                  <td>
                    {isSelected ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.clearGood}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.setState({ selectedGood: good })}
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
