import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main
        className="
          section
          container
        "
      >
        {selectedGood
          ? (
            <h1
              className="
                title
                is-flex
                is-align-items-center
              "
            >
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="
                  delete
                  ml-3
                "
                onClick={this.removeGood}
              >
                <img src="" alt="" />
              </button>
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  {
                    'has-background-success-light':
                      selectedGood === good,
                  },
                )}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="
                          button
                          is-info
                        "
                        onClick={this.removeGood}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.addGood(good);
                        }}
                      >
                        +
                      </button>
                    )}
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
