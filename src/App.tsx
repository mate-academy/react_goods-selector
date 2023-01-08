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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length
          ? (
            <h1 className="
              title
              is-flex
              is-align-items-center"
            >
              {selectedGood}
              {' '}
              is selected

              <button
                data-cy="ClearButton"
                type="button"
                aria-label="clear"
                className="delete ml-3"
                onClick={this.removeGood}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  `${good === selectedGood && 'has-background-success-light'}`
                }
              >
                <td>
                  {good === selectedGood
                    ? (
                      <button
                        key={good}
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
                        key={good}
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
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
