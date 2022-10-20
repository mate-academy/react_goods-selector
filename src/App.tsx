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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  cancelHandler = () => {
    this.setState({ selectedGood: '' });
  };

  selectHandler = (good: string) => {
    if (this.state.selectedGood === good) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: good });
    }
  };

  isSelected = (good: string) => {
    return good === this.state.selectedGood;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood}
            {' '}
            is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.cancelHandler}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  classNames(
                    { 'has-background-success-light': good === selectedGood },
                  )
                }
              >
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      this.selectHandler(good);
                    }}
                    data-cy={this.isSelected(good)
                      ? 'RemoveButton'
                      : 'AddButton'}
                    className={this.isSelected(good)
                      ? 'button is-info'
                      : 'button'}
                  >
                    {this.isSelected(good)
                      ? '+'
                      : '-'}
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
