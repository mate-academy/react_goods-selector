import React from 'react';
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
  allGoods: string[];
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    allGoods: goods,
    selectedGood: 'Jam',
  };

  handleClearButtonClick = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const {
      allGoods,
      selectedGood,
    } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is `
            : 'No goods '}
          selected

          { selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearButtonClick}
              aria-label="Clear"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {allGoods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={`${selectedGood === good
                  ? 'has-background-success-light'
                  : ''
                }`}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.setState({ selectedGood: '' })}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.setState({ selectedGood: good })}
                      >
                        +
                      </button>
                    )}
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
