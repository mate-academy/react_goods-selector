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
  selectedGoods: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {selectedGoods
          ? (
            <h1 className="title is-flex is-align-items-center">
              {selectedGoods}
              {' '}
              is selected

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGoods: '' });
                }}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={
                  selectedGoods === item
                    ? ('has-background-success-light')
                    : ('')
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGoods === item
                        ? ('RemoveButton')
                        : ('AddButton')
                    }
                    type="button"
                    className={
                      selectedGoods === item
                        ? ('button is-info')
                        : ('button')
                    }
                    onClick={() => {
                      this.setState({ selectedGoods: item });
                      if (selectedGoods === item) {
                        this.setState({ selectedGoods: '' });
                      }
                    }}
                  >
                    {selectedGoods === item
                      ? ('-')
                      : ('+')}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
