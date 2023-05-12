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

interface AppState {
  selectedGood: string;
}

export class App extends React.Component <{}, AppState> {
  state = {
    selectedGood: 'Jam',
  };

  clearButton = () => {
    this.setState({ selectedGood: '' });
  };

  addButton(name:string) {
    this.setState({ selectedGood: name });
  }

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    isSelected
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={`${isSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                      }`}
                      type="button"
                      className={`button ${isSelected ? 'is-info' : ''}`}
                      onClick={
                        isSelected
                          ? this.clearButton
                          : () => this.addButton(good)
                      }
                    >
                      {`${isSelected ? '-' : '+'}`}
                    </button>
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
