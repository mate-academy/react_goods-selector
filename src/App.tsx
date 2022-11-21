import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

type State = {
  selectedGood: string,
};

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

export class App extends Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clearStateSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  addStateSelectedGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */ }
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearStateSelectedGood}
            />
          </h1>
        ) : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                className={classNames(
                  { 'has-background-success-light': selectedGood === good },
                )}
                data-cy="Good"
                key={good}
              >
                <td>
                  {
                    (selectedGood === good)
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.clearStateSelectedGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.addStateSelectedGood(good)}
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
    );
  }
}
