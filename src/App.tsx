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
  goodSelected: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goodSelected: 'Jam',
  };

  clearSelected = () => {
    this.setState({ goodSelected: null });
  };

  onSelect = (selectedGood: string) => {
    this.setState({ goodSelected: selectedGood });
  };

  render(): JSX.Element {
    const { goodSelected } = this.state;

    return (
      <main className="section container">
        {goodSelected ? (
          <h1 className="title is-flex is-align-items-center">
            {`${goodSelected} is selected`}
            <button
              data-cy="ClearButton"
              aria-label="remove"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelected}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}
        <table className="table">
          <tbody>
            {goods.map((good) => (
              goodSelected === good ? (
                <tr
                  data-cy="Good"
                  className="has-background-success-light"
                  key={good}
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.clearSelected}
                    >
                      -
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ) : (
                <tr data-cy="Good" key={good}>
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.onSelect(good)}
                    >
                      +
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
