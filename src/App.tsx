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

export class App extends React.Component<{}, {}> {
  state = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectBtn = (item: string) => {
    const { selectedGood } = this.state;

    if (selectedGood !== item) {
      this.setState({ selectedGood: item });
    } else {
      this.setState({ selectedGood: '' });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearGood}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  selectedGood === good
                    ? 'has-background-success-light'
                    : undefined
                }
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={
                      selectedGood === good
                        ? 'button is-info'
                        : 'button'
                    }
                    onClick={() => this.selectBtn(good)}
                  >
                    {
                      selectedGood === good
                        ? '-'
                        : '+'
                    }
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
