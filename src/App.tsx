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
  selectedGood: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  ClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  switcher(good: string) {
    if (good === this.state.selectedGood) {
      this.setState({ selectedGood: null });
    } else {
      this.setState({ selectedGood: good });
    }
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? (
            `${selectedGood} is selected`
          ) : (
            'No goods selected'
          )}

          {selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.ClearButton()}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood !== good ? 'AddButton' : 'RemoveButton'
                    }
                    type="button"
                    className={classNames({
                      button: selectedGood !== good,
                      'button is-info': selectedGood === good,
                    })}
                    onClick={() => this.switcher(good)}
                  >
                    {selectedGood !== good ? '+' : '-'}
                  </button>
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
