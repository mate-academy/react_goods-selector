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

  handleClick = (element: string) => {
    this.setState({ selectedGood: element });
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

          {selectedGood && (
            <button
              data-cy="RemoveButton"
              type="button"
              className="delete ml-3"
              aria-label="Save"
              onClick={this.handleClear}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={isSelected ? 'has-background-success-light' : ''}
                  key={good}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleClear}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.handleClick(good)}
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
