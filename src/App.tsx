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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  clearSelection = () => {
    this.setState({
      selectedGood: '',
    });
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood
            ? `${this.state.selectedGood} is selected`
            : `No goods selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}

          {this.state.selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelection}
            />
          )}
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
                    {good === this.state.selectedGood && (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.clearSelection}
                      >
                        -
                      </button>
                    )}

                    {good !== this.state.selectedGood && (
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
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
