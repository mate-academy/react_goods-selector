import React from 'react';
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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectItem = (good: string) => {
    if (good === this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    }

    if (good !== this.state.selectedGood) {
      this.setState({ selectedGood: good });
    }
  };

  render() {
    const {
      selectedGood,
    } = this.state;

    return (
      <main className="section container">
        {selectedGood.length
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={good === selectedGood
                  ? (
                    'has-background-success-light'
                  )
                  : (
                    ''
                  )}
              >
                <td>
                  <button
                    data-cy={good === selectedGood
                      ? (
                        'RemoveButton'
                      )
                      : (
                        'AddButton'
                      )}
                    type="button"
                    className={good === selectedGood
                      ? (
                        'button is-info'
                      )
                      : (
                        'button'
                      )}
                    onClick={() => this.selectItem(good)}
                  >
                    {good === selectedGood ? ('-') : ('+')}
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
