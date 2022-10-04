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
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  }
  clearState = () => {
    this.setState({ selectedGood: ''})
  }
  changeState = (good: string) => {
    this.setState({ selectedGood: good})
  }
  render() {
    const { selectedGood } = this.state;
    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearState}
              />
            </h1>
            ) : (
              <h1 className="title is-flex is-align-items-center">
                No goods selected
              </h1>
            )}

        <table className="table">
          <tbody>
          {goods.map(good => (
            <tr
              key= {good}
              data-cy="Good"
              className={classNames(
                {
                  'has-background-success-light': good === selectedGood,
                },
              )}
              >
              <td>
                {selectedGood === good
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.clearState}
                    >
                  -
                </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.changeState(good)}
                    >
                  +
                </button>
                  )
                }

              </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
    </main>
    )
  }
};
