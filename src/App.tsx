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

interface State {
  selectedGood: string,
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clearButton = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearButton}
                  aria-label="clear"
                />
              </h1>
            )
            : (
              <h1 className="title">
                No goods selected
              </h1>
            )
        }

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': (good === selectedGood) },
                )}
              >
                <td>
                  {good === selectedGood
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info "
                        onClick={this.clearButton}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.selectGood(good)}
                      >
                        +
                      </button>
                    )}
                </td>
                <td data-cy="GoodTitle" className="is-vcentered ">
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
