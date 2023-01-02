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
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  clearSelection = () => {
    this.setState({
      selectedGood: '',
    });
  };

  renderGood = (good: string) => {
    const isSelected = good === this.state.selectedGood;

    return (
      <tr
        key={good}
        data-cy="Good"
        className={isSelected ? 'has-background-success-light' : ''}
      >
        <td>
          {isSelected ? (
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              onClick={this.clearSelection}
            >
              -
            </button>
          ) : (
            <button
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={() => this.selectGood(good)}
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
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGood}

            {' is selected'}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelection}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => this.renderGood(good))}
          </tbody>
        </table>
      </main>
    );
  }
}
