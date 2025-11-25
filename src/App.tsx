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

  selectGood = (goodName: string) => {
    this.setState({ selectedGood: goodName });
  };

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const goodName = button.dataset.goodName;

    if (goodName) {
      this.selectGood(goodName);
    }
  };

  render() {
    const isSelected = this.state.selectedGood !== '';

    return (
      <main className="section container">
        {!isSelected ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelection}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const rowClass =
                good === this.state.selectedGood
                  ? 'has-background-success-light'
                  : '';

              const isCurrentGoodSelected = good === this.state.selectedGood;
              // const isAnyGoodSelected = isSelected;

              return (
                <tr data-cy="Good" key={good} className={rowClass}>
                  <td>
                    {isCurrentGoodSelected ? (
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
                        data-good-name={good}
                        onClick={this.handleClick}
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
