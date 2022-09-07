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
  selectedItem: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedItem: 'Jam',
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          { selectedItem.length > 0
            ? `${selectedItem} is selected`
            : 'No goods selected' }

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedItem && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="clear"
              onClick={() => {
                this.setState({ selectedItem: '' });
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>

            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={selectedItem === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={selectedItem === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={selectedItem === good
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => {
                      this.setState(selectedItem !== good
                        ? { selectedItem: good }
                        : { selectedItem: '' });
                    }}
                  >
                    {selectedItem === good ? '-' : '+'}
                  </button>
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
