/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component, ReactNode } from 'react';
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render(): ReactNode {
    const { selectedGood } = this.state;
    const goodsList = [...goods];

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goodsList.map(item => {
              const isSelected = item === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={isSelected
                    ? 'has-background-success-light'
                    : undefined}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={`button ${isSelected && 'is-info'}`}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
