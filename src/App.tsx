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
  selectedGoods: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: 'Jam',
  };

  clearSelected = () => this.setState({ selectedGoods: null });

  onSelect = (selectedGood: string) => {
    return this.setState({ selectedGoods: selectedGood });
  };

  render(): JSX.Element {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {selectedGoods ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGoods} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="RemoveButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.clearSelected()}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}
        <table className="table">
          <tbody>
            {goods.map((good) => (selectedGoods === good ? (
              <tr
                data-cy="Good"
                className="has-background-success-light"
                key={good}
              >
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={this.clearSelected}
                  >
                    -
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ) : (
              <tr data-cy="Good" key={good}>
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => this.onSelect(good)}
                  >
                    +
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </main>
    );
  }
}
