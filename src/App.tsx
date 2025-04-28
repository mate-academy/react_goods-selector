import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  selectedGood: string;
};

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

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelect = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    return (
      <main className="section container">
        {' '}
        {this.state.selectedGood === '' ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${this.state.selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            {this.state.selectedGood !== '' && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            )}
          </h1>
        )}
        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === this.state.selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={isSelected ? 'has-background-success-light' : ''}
                >
                  <td>
                    {isSelected ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleClear}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleSelect(good)}
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
