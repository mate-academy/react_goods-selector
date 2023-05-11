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
  goods: Array<string>;
  selectedGood: string;
  hiddenCross: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods,
    selectedGood: 'Jam',
    hiddenCross: false,
  };

  saveStateForButton(good: string): void {
    this.setState({
      selectedGood: good,
      hiddenCross: true,
    });
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      goods,
      selectedGood,
      hiddenCross,
    } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}
          {' '}
          is selected

          {hiddenCross && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({
                  selectedGood: 'No goods',
                  hiddenCross: false,
                });
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light':
                    selectedGood === good,
                })}
              >
                <td>

                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          this.saveStateForButton(good);
                        }}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.saveStateForButton(good);
                        }}
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
