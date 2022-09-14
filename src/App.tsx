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

// type Props = {
//   goods: string[];
// };

export class App extends React.Component< {}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClick = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handleClickClear = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {(selectedGood.length === 0)
          ? (
            <h1 className="title">
              No goods selected
            </h1>
          )

          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                aria-label="button"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClickClear}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light':
                    good === selectedGood,
                })}
              >
                <td>
                  {(good !== selectedGood)
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.handleClick(good);
                        }}
                      >
                        +
                      </button>
                    )

                    : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleClickClear}
                      >
                        -
                      </button>
                    )}

                </td>
                <td
                  data-cy="GoodTitle"
                  key={good}
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
