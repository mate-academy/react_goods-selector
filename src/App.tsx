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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  cancellationOfSelected = () => {
    this.setState({ selectedGood: '' });
  };

  selectionOfGood = (
    _event: React.MouseEvent<HTMLButtonElement>,
    selected: string,
  ): void => {
    if (this.state.selectedGood === selected) {
      this.setState({ selectedGood: '' });
    }

    if (this.state.selectedGood !== selected) {
      this.setState({ selectedGood: selected });
    }
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood
          && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.cancellationOfSelected}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': isSelected },
                  )}
                  key={good}
                >
                  <td>
                    <button
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': isSelected },
                      )}
                      onClick={(event) => {
                        this.selectionOfGood(event, good);
                      }}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
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
