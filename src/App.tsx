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

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {selectedGoods
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGoods} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete m1-3"
                onClick={() => this.setState({ selectedGoods: '' })}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={selectedGoods === good
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    {selectedGoods !== good
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.setState({ selectedGoods: good })}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.setState({ selectedGoods: '' })}
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
