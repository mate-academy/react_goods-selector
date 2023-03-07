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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleAddClick = (event: React.MouseEvent, good: string) => {
    event.preventDefault();
    this.setState({ selectedGood: good });
  };

  clearSelectionHandler = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {(!selectedGood)
          ? (
            <h1 className="title">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' '}
              is selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearSelectionHandler}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good: string) => (
              <tr
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={good === selectedGood
                      ? 'button is-info' : 'button'}
                    onClick={(event) => (selectedGood === good
                      ? this.clearSelectionHandler()
                      : this.handleAddClick(event, good))}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
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
