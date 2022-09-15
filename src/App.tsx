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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClear = () => this.setState({ selectedGood: '' });

  handleSelect = (good: string) => (
    this.state.selectedGood === good
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: good })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === ''
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  '', {
                    'has-background-success-light': selectedGood === good,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={
                      (selectedGood === good)
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': selectedGood === good,
                      },
                    )}
                    onClick={() => this.handleSelect(good)}
                  >
                    {selectedGood === good
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
