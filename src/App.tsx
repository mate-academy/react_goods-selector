import { Component } from 'react';
import classNames from 'classnames';
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

interface State {
  selectedGood: string
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  clearGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {
          !selectedGood ? (
            <h1 className="title">No goods selected</h1>
          ) : (
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
        }

        <table className="table">
          <tbody>
            {
              goods.map(good => {
                const isGoodSelected = this.state.selectedGood === good || '';

                return (
                  <tr
                    data-cy="Good"
                    className={
                      classNames(
                        { 'has-background-success-light': isGoodSelected },
                      )
                    }
                    key={good}
                  >
                    <td>
                      {
                        isGoodSelected
                          ? (
                            <button
                              data-cy="RemoveButton"
                              type="button"
                              className="button is-info"
                              onClick={this.clearGood}
                            >
                              -
                            </button>
                          ) : (
                            <button
                              data-cy="AddButton"
                              type="button"
                              className="button"
                              onClick={() => this.addGood(good)}
                            >
                              +
                            </button>
                          )
                      }
                    </td>

                    <td
                      data-cy="GoodTitle"
                      className="is-vcentered"
                    >
                      {good}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
