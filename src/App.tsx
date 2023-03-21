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
  selectedGod: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGod: 'Jam',
  };

  // addClass = (event: React.MouseEvent<HTMLTableRowElement>) => {
  //   this.setState()
  // }

  render() {
    const { selectedGod } = this.state;

    return (
      <main className="section container">
        {!selectedGod
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGod} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGod: '' });
                }}
              />
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  onClick={() => {
                    if (selectedGod !== good) {
                      this.setState({ selectedGod: good });
                    } else {
                      this.setState({ selectedGod: '' });
                    }
                  }}
                  className={
                    selectedGod !== good ? '' : 'has-background-success-light'
                  }
                >
                  <td>
                    {selectedGod !== good ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    ) : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    )}

                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
