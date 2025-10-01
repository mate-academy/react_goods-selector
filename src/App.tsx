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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  // Select a good by reading the data-good attribute from the event target
  handleSelectGood = (e: React.MouseEvent<HTMLButtonElement>) => {
    const good = e.currentTarget.dataset.good || '';

    this.setState({ selectedGood: good });
  };

  // Clear the current selection
  handleClearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  // Remove (clear) selection — kept as a separate method per request
  handleRemoveSelection = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood !== '' ? (
            <>{this.state.selectedGood} is selected</>
          ) : (
            <>No goods selected</>
          )}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {this.state.selectedGood !== '' ? (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearSelection}
            />
          ) : null}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    good === this.state.selectedGood
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    {this.state.selectedGood !== good ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        data-good={good}
                        onClick={this.handleSelectGood}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleRemoveSelection}
                      >
                        -
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
