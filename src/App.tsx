import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  goodsFromArray: string[]
  selectedGood: string;
};

type Good = string;

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goodsFromArray: goods,
    selectedGood: 'Jam',
  };

  handleSelect = (good: Good) => {
    this.setState({ selectedGood: good });
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {(selectedGood)
          ? (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' '}
              is selected

              {selectedGood && (
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClear}
                  aria-label="clear"
                />
              )}
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {this.state.goodsFromArray.map((good) => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    {
                      'has-background-success-light': (good === selectedGood),
                    },
                  )}
                >
                  <td>
                    {(good !== selectedGood)
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.handleSelect(good)}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleClear}
                        >
                          -
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
