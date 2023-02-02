import { Component } from 'react';
import classnames from 'classnames';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelect = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;
    const selectionMessage = selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';

    return (
      <main className="section container">
        <h1
          className={classnames(
            'title',
            { 'is-flex is-align-items-center': selectedGood },
          )}
        >
          {selectionMessage}
          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClear}
            />
          )}
        </h1>
        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classnames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleClear}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.handleSelect(good)}
                        >
                          +
                        </button>
                      )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">{good}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
