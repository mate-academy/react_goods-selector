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

  resetSelector = () => {
    this.setState({ selectedGoods: '' });
  };

  resetButton = (good: string, selectedGoods: string) => (
    selectedGoods === good
      ? this.setState({ selectedGoods: '' })
      : this.setState({ selectedGoods: good })
  );

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title', { 'is-flex is-align-items-center': selectedGoods },
        )}
        >
          {selectedGoods.length
            ? `${selectedGoods} is selected`
            : 'No goods selected'}
          {selectedGoods && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="Clear"
              onClick={this.resetSelector}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  '', {
                    'has-background-success-light': selectedGoods === good,
                  },
                )}
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
                      this.resetButton(good, selectedGoods);
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
