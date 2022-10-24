import { Component } from 'react';
import classNames from 'classnames';
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

interface AppState {
  selectedGoods: string;
}

export class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
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
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGoods: '' });
                }}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>

            {goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={
                  classNames({
                    'has-background-success-light': item === selectedGoods,
                  })
                }
              >
                <td>
                  {selectedGoods === item
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          this.setState({ selectedGoods: '' });
                        }}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.setState({ selectedGoods: item });
                        }}
                      >
                        +
                      </button>
                    )}
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
