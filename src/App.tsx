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
  pressedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedGood: '',
  };

  render() {
    const { pressedGood = 'Jam' } = this.state;

    return (
      <main className="section container">
        <h1 className="title">No goods selected</h1>

        <h1 className="title is-flex is-align-items-center">
          {`${pressedGood} is selected`}

          {/*  eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr data-cy="Good">
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
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
