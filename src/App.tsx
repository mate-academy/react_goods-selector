import React from 'react';
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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  removeGood = () => (
    this.setState({ selectedGood: '' })
  );

  addGood = (good: string) => (
    this.setState({ selectedGood: good })
  );

  render() {
    return (
      <main className="section container">

        <h1 className={this.state.selectedGood
          ? 'title'
          : 'title is-flex is-align-items-center'}
        >
          {this.state.selectedGood
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected' }

          {(this.state.selectedGood) && (
            <>
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
            {goods.map((good) => (
              <tr
                className={this.state.selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
                key={good}
                data-cy="Good"
              >
                {this.state.selectedGood === good
                  ? (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.removeGood}
                      >
                        -
                      </button>
                    </td>
                  )

                  : (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.addGood(good)}
                      >
                        +
                      </button>
                    </td>
                  )}
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
