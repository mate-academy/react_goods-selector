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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const resetHandler = () => {
      this.setState({
        selectedGood: '',
      });
    };

    const handleClick = (good: string) => {
      if (selectedGood === good) {
        this.setState({
          selectedGood: '',
        });
      } else {
        this.setState({
          selectedGood: good,
        });
      }
    };

    return (
      <main className="section container">

        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                <button
                  aria-label="Clear"
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={resetHandler}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {goods.map((good: string) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className={selectedGood === good
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => (
                      handleClick(good)
                    )}
                  >
                    {selectedGood === good ? '-' : '+'}
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
