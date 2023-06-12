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

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (
    _event: React.MouseEvent<HTMLButtonElement>,
    target: string,
  ) => {
    if (this.state.selectedGood === target) {
      this.setState({ selectedGood: '' });
    }

    if (this.state.selectedGood !== target) {
      this.setState({ selectedGood: target });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood !== '' && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3 is-danger"
              onClick={this.removeGood}
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
                  key={good}
                  className={classNames('table__good', {
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    { isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={(event) => {
                            this.selectGood(event, good);
                          }}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button button--add"
                          onClick={(event) => {
                            this.selectGood(event, good);
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
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
