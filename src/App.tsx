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

type State = {
  selectedGoods: string;
};

export default class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: 'Jam',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title', { 'is-flex is-align-items-center': selectedGoods },
        )}
        >
          {selectedGoods.length > 0
            ? `${selectedGoods} is selected`
            : 'No goods selected'}
          {selectedGoods && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="Clear"
              onClick={() => {
                this.setState({ selectedGoods: '' });
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={
                  selectedGoods === good
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  <button
                    type="button"
                    data-cy={
                      selectedGoods === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    className={classNames(
                      'button', { 'is-info': selectedGoods === good },
                    )}
                    onClick={() => {
                      if (selectedGoods === good) {
                        this.setState({ selectedGoods: '' });
                      } else if (selectedGoods !== good) {
                        this.setState({ selectedGoods: good });
                      }
                    }}
                  >
                    {selectedGoods === good
                      ? '-'
                      : '+'}
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
