import React from 'react';
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

type State = {
  selectedGood : string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  handleAddGoods = (good: string) => (
    this.state.selectedGood === good
      ? this.handleClearButton()
      : this.setState({ selectedGood: good })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            !selectedGood
              ? 'No goods selected'
              : `${selectedGood} is selected`
          }

          {
            selectedGood && (
              <button
                data-cy="ClearButton"
                aria-label="Clear"
                type="button"
                className="delete ml-3"
                onClick={this.handleClearButton}
              />
            )
          }
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': selectedGood === good,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'button is-info': selectedGood === good,
                      },
                    )}
                    onClick={() => {
                      this.handleAddGoods(good);
                    }}
                  >
                    {
                      selectedGood === good
                        ? '-'
                        : '+'
                    }
                  </button>
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
