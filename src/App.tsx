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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleGoodSelection = (item: string) => {
    this.setState({ selectedGood: item });
  };

  isSelected = (item: string) => {
    return item === this.state.selectedGood;
  };

  render() {
    const { selectedGood } = this.state;
    const { handleGoodSelection, isSelected } = this;

    const titleName = selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {titleName}

          {selectedGood
          && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                handleGoodSelection('');
              }}
            />
          )}

        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  classNames('is-vcentered', {
                    'has-background-success-light': isSelected(good),
                  })
                }
              >
                <td>

                  {isSelected(good)
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          handleGoodSelection('');
                        }}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          handleGoodSelection(good);
                        }}
                      >
                        +
                      </button>
                    )}
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
