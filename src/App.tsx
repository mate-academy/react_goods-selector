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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    const clearClick = () => {
      this.setState({ selectedGood: '' });
    };

    const selectClick = (good: string) => {
      this.setState({ selectedGood: good });
    };

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            <button
              data-cy="ClearButton"
              aria-label="Clear"
              type="button"
              className="delete ml-3"
              onClick={clearClick}
            />
          )}

        </h1>
        <table className="table">
          {goods.map((good) => (
            <tr
              data-cy="Good"
              key={good}
              className={
                classNames(
                  { 'has-background-success-light': good === selectedGood },
                )
              }
            >
              <td>
                <button
                  data-cy={
                    good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    classNames('button',
                      { 'button is-info': good === selectedGood })
                  }
                  onClick={() => (
                    good === selectedGood
                      ? this.setState(clearClick)
                      : this.setState(() => selectClick(good))
                  )}
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
        </table>
      </main>
    );
  }
}
