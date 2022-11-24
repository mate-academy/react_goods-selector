import { Component } from 'react';
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

interface State {
  selectedGood: string
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearGoodOnClick = () => {
    this.setState({ selectedGood: '' });
  };

  addGoodOnClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  isGoodSelected = (good: string) => {
    return good === this.state.selectedGood;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearGoodOnClick}

              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  { 'has-background-success-light': this.isGoodSelected(good) },
                )}
              >
                <td>
                  {this.isGoodSelected(good)
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.clearGoodOnClick}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.addGoodOnClick(good)}
                      >
                        +
                      </button>
                    )}

                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
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
