import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type Props = {};

type State = {
  goods: string[],
  chosenElement: string,
};

export class App extends React.Component<Props, State> {
  state = {
    goods: [
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
    ],
    chosenElement: 'Jam',
  };

  chosenGood = (good: string) => {
    this.setState({ chosenElement: good });
  };

  clear = () => {
    this.setState({ chosenElement: '' });
  };

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          { this.state.chosenElement === ''
            ? 'No goods selected'
            : `${this.state.chosenElement} is selected` }
          {this.state.chosenElement
            ? (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.clear();
                }}
              >
                {null}
              </button>
            )
            : null}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              if (good === this.state.chosenElement) {
                return (
                  <tr
                    data-cy="Good"
                    className="has-background-success-light"
                    key={good}
                  >
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>
                    <td
                      data-cy="GoodTitle"
                      className="is-vcentered"
                    >
                      {this.state.chosenElement}
                    </td>
                  </tr>
                );
              }

              return (
                <tr
                  data-cy="Good"
                  key={good}
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.chosenGood(good);
                      }}
                    >
                      +
                    </button>
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
