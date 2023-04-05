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
  selectedGood: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clearGoods = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelectGood = (newSelectedGood: string) => {
    this.setState({ selectedGood: newSelectedGood });
  };

  render() {
    const { selectedGood } = this.state;
    const emptyState = 'No goods selected';

    return (
      <main className="section container">
        {selectedGood ? (
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
        ) : (
          <h1 className="title">{emptyState}</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <>
                  <tr
                    data-cy="Good"
                    key={good}
                    className={classNames(
                      { 'has-background-success-light': (isSelected) },
                    )}
                  >
                    <td>
                      {isSelected ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.clearGoods}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => (
                            this.handleSelectGood(good)
                          )}
                        >
                          +
                        </button>
                      )}
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
