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
  selected: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selected: 'Jam',
  };

  checkGood = (good: string) => {
    this.setState({ selected: good });
  };

  uncheckGood = () => {
    this.setState({ selected: '' });
  };

  isGoodSelected = (good: string) => {
    return this.state.selected === good;
  };

  render() {
    const { selected } = this.state;
    const { isGoodSelected } = this;

    return (
      <main className="section container">
        {selected ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selected} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.uncheckGood}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  isGoodSelected(good)
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  {isGoodSelected(good) ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.uncheckGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.checkGood(good)}
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
