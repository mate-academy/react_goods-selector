import React from 'react';
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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clearGoods = () => {
    this.setState({ selectedGood: '' });
  };

  selectGoods = (good: string) => (
    this.state.selectedGood === good
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: good })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length === 0
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearGoods}
              />

            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': isSelected },
                  )}
                >
                  <td>
                    <button
                      data-cy={
                        isSelected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        isSelected
                          ? 'button is-info'
                          : 'button'
                      }
                      onClick={() => this.selectGoods(good)}
                    >
                      {
                        isSelected
                          ? '-'
                          : '+'
                      }
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
