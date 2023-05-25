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

type Props = {};

type State = {
  selectedGood: string | '';
};

export class App extends Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  readonly() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={`title ${selectedGood ? 'is-flex is-align-items-center' : ''}`}>
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {selectedGood && (
          /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearSelection}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  selectedGood === good
                    ? ''
                    : 'has-background-success-light'
                }
              >
                <td>{good}</td>
                <td>
                  {!selectedGood && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.setState({ selectedGood: good })}
                    >
                      +
                    </button>
                  )}
                  {good === selectedGood && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.handleClearSelection}
                    >
                      -
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
