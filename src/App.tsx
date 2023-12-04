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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  handleAddButton = (good: string) => this.setState({ selectedGood: good });

  handleRemoveButton = () => this.setState({ selectedGood: '' });

  render(): React.ReactNode {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood ? `${this.state.selectedGood} is selected` : 'No goods selected'}

          {this.state.selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleRemoveButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={goods.indexOf(good)}
                className={good === this.state.selectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {good === this.state.selectedGood
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleRemoveButton}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleAddButton(good)}
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
