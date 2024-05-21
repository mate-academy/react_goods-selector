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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  handleAdd = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearSelection}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isGoodSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    isGoodSelected ? 'has-background-success-light' : ''
                  }
                >
                  <td>
                    <button
                      data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={`button${isGoodSelected ? ' is-info' : ''}`}
                      onClick={
                        isGoodSelected
                          ? this.handleClearSelection
                          : () => this.handleAdd(good)
                      }
                    >
                      {isGoodSelected ? '-' : '+'}
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
