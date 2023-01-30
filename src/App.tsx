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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {(!selectedGood)
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => (
                  this.setState({
                    selectedGood: '',
                  })
                )}
              />
            </h1>
          )}

        <table className="table">
          {goods.map((good) => (
            <tbody key={good}>
              <tr
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': selectedGood === good,
                  },
                )}
              >

                <td
                  role="presentation"
                  onClick={() => {
                    if (selectedGood !== good) {
                      this.setState({
                        selectedGood: good,
                      });
                    } else {
                      this.setState({
                        selectedGood: '',
                      });
                    }
                  }}
                >

                  {!(selectedGood === good)
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    )

                    : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </main>
    );
  }
}
