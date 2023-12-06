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

type AppState = {
  selectedItem: string,
};

export class App extends React.Component<{}, AppState> {
  state = {
    selectedItem: goods[goods.indexOf('Jam')],
  };

  clearItem = () => {
    this.setState({ selectedItem: '' });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="section container">
        {selectedItem ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedItem}
            {' '}
            is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearItem}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedItem === good;

              return (
                <>
                  <tr
                    key={good}
                    className={
                      isSelected ? 'has-background-success-light' : undefined
                    }
                    data-cy="Good"
                  >
                    <td>
                      {!isSelected ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.setState({ selectedItem: good })}
                        >
                          +
                        </button>
                      ) : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.clearItem}
                        >
                          -
                        </button>
                      )}
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
