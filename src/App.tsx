import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type Props = {};

type State = {
  goods: string[],
  chosenElem: string,
  clearBtn: boolean,
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
    chosenElem: 'Jam',
    clearBtn: true,
  };

  chosenGood = (good: string) => {
    this.setState({ chosenElem: good });
    this.setState({ clearBtn: true });
  };

  clear = () => {
    this.setState({ chosenElem: 'No' });
    this.setState({ clearBtn: false });
  };

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          { this.state.chosenElem === 'No'
            ? 'No goods selected'
            : `${this.state.chosenElem} is selected` }
          {this.state.clearBtn
            ? (
              <div>
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
              </div>
            )
            : null}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              if (good === this.state.chosenElem) {
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
                        +
                      </button>
                    </td>
                    <td
                      data-cy="GoodTitle"
                      className="is-vcentered"
                    >
                      {this.state.chosenElem}
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
