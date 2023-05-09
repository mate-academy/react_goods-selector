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

interface State {
  selectedGood: string | '';
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addItems = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearItems = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood.length > 0 ? `${selectedGood} is selected` : 'No goods selected'}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={this.clearItems}
            aria-label="Clear Selection"
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              return (
                <React.Fragment key={good}>
                  <tr
                    data-cy="Good"
                    className={
                      selectedGood === good
                        ? 'has-background-success-light'
                        : ''
                    }
                  >
                    <td>
                      {selectedGood === good ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.addItems(good)}
                        >
                          +
                        </button>
                      )}
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
