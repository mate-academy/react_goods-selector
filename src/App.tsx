import { Component } from 'react';
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
export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  addGoodOnClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearGoodOnClick = () => {
    this.setState({ selectedGood: '' });
  };

  isSelected = (good: string) => {
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
                onClick={() => this.clearGoodOnClick()}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map(good => (
              (this.isSelected(good))
                ? (
                  <tr
                    data-cy="Good"
                    key={good}
                    className="has-background-success-light"
                  >
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.clearGoodOnClick()}
                      >
                        -
                      </button>
                    </td>
                    <td
                      data-cy="GoodTitle"
                      className="is-vcentered"
                    >
                      {good}
                    </td>
                  </tr>
                )
                : (
                  <tr
                    data-cy="Good"
                    key={good}
                  >
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.addGoodOnClick(good)}
                      >
                        +
                      </button>
                    </td>
                    <td
                      data-cy="GoodTitle"
                      className="is-vcentered"
                    >
                      {good}
                    </td>
                  </tr>
                )
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
