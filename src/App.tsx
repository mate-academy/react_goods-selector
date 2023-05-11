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

interface AppState {
  selectedGood:string;
}

export class App extends React.Component<{}, AppState> {
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

    return (

      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected' }

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              title="button"
              onClick={this.handleClear}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {selectedGood !== good
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleSelect(good)}
                      >
                        +
                      </button>
                    )
                    : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleClear}
                      >
                        -
                      </button>
                    )}
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">{good}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
