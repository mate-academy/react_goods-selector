import { Component } from 'react';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleSelect = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handleClear = () => {
    this.setState({
      selectedGood: '',
    });
  };

  checkSelectedGood = (good: string) => (good === this.state.selectedGood);

  render() {
    const { selectedGood } = this.state;
    const { handleSelect, handleClear, checkSelectedGood } = this;

    return (
      <main className="section container">
        {selectedGood !== ''
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleClear}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  { 'has-background-success-light': checkSelectedGood(good) },
                )}
              >
                <td>
                  {checkSelectedGood(good)
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={handleClear}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => (
                          handleSelect(good)
                        )}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">{good}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
