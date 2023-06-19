import { Component } from 'react';
import './App.scss';
import classNames from 'classnames';

const goods: string[] = [
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleAddButton = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const goodSelected = selectedGood.length > 0;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {goodSelected ? `${selectedGood} is selected` : 'No goods selected'}
          {goodSelected && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.handleClearButton()}
            >
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            </button>
          )}
        </h1>
        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames('', {
                  'has-background-success-light': good === selectedGood,
                })}
              >
                <td>
                  {good === selectedGood ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => this.handleClearButton()}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.handleAddButton(good)}
                    >
                      +
                    </button>
                  )}
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
