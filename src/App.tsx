import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

// interface Props {
//   goodsList: string[];
// }

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    return (

      <main className="section container">
        <h1 className="title">No goods selected</h1>

        <h1 className="title is-flex is-align-items-center">
          {`${this.state.selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const className = cn({
                'has-background-success-light':
                good === this.state.selectedGood,
              });

              return (
                <tr data-cy="Good" className={className}>
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
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
