import React from 'react';
import cn from 'classnames';
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
  state = {
    selectedGood: 'Jam',
  };

  removeGood = () => (
    this.setState({ selectedGood: '' })
  );

  selectGood = (good: string) => (
    this.setState({ selectedGood: good })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className={cn(
          'title',
          { 'is-flex': selectedGood, 'is-align-items-center': selectedGood },
        )}
        >
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected' }

          {(selectedGood) && (
            <>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeGood}

              />
            </>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  className={cn({
                    'has-background-success-light': isSelected,
                  })}
                  key={good}
                  data-cy="Good"
                >
                  {isSelected
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.removeGood}
                        >
                          -
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.selectGood(good)}
                        >
                          +
                        </button>
                      </td>
                    )}
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
