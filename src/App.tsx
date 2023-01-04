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
  selected: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selected: 'Jam',
  };

  handleClickAddSelection = (good: string) => {
    this.setState({
      selected: good,
    });
  };

  handleClickRemoveSelection = () => {
    this.setState({
      selected: '',
    });
  };

  render() {
    return (
      <main className="section container">
        {this.state.selected
          ? (
            <h1 className="title is-flex is-align-item-center">
              {`${this.state.selected} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClickRemoveSelection}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map((good: string) => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  good === this.state.selected
                    ? 'has-background-success-light has-text-danger-dark'
                    : ''
                }
              >
                <td>
                  {this.state.selected === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info is-danger is-rounded"
                        onClick={this.handleClickRemoveSelection}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button is-info is-light is-rounded"
                        onClick={() => this.handleClickAddSelection(good)}
                      >
                        +
                      </button>
                    )}
                </td>
                <td data-cy="GoodTitle">
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
