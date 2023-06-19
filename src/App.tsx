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
  selectedGood: null | string
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: null,
  };

  handleClick = (good: string) => {
    if (this.state.selectedGood === good) {
      this.handleClickClear();
    } else {
      this.setState({ selectedGood: good });
    }
  };

  handleClickClear = () => {
    this.setState({ selectedGood: null });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood !== null ? `${selectedGood} is selected` : 'No goods selected'}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => this.handleClickClear()}
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <>
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    selectedGood === good
                      ? 'has-background-success-light'
                      : ''
                  }
                  onClick={() => this.handleClick(good)}
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
                      onClick={
                        selectedGood !== null
                          ? () => this.handleClickClear()
                          : undefined
                      }
                    >
                      {selectedGood === good ? '-' : '+'}
                    </button>
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
                    {good}
                  </td>
                </tr>
              </>
            ))}

          </tbody>
        </table>
      </main>
    );
  }
}
