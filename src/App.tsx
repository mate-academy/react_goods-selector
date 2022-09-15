import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component {
  state: Readonly<State> = {
    selectedGood: 'Jam is',
  };

  handleClearButton = () => {
    this.setState({ selectedGood: 'No goods' });
  };

  handleAddGood = (add: string) => {
    this.setState({ selectedGood: `${add} is` });
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {`${this.state.selectedGood} selected`}

          {this.state.selectedGood !== 'No goods' && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              this.state.selectedGood === `${good} is`
                ? (
                  <tr
                    data-cy="Good"
                    className="has-background-success-light"
                    key={good}
                  >
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleClearButton}
                      >
                        -
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
                : (
                  <tr data-cy="Good" key={good}>
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleAddGood(good)}
                      >
                        +
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
