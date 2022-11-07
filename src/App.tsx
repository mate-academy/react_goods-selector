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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    return (

      <main className="section container">
        {this.state.selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${this.state.selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              aria-label="x"
              className="delete ml-3"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(item => {
              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={this.state.selectedGood === item
                    ? 'has-background-success-light'
                    : ''}
                >
                  {this.state.selectedGood !== item ? (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.setState({ selectedGood: item });
                        }}
                      >
                        +
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          this.setState({ selectedGood: '' });
                        }}
                      >
                        -
                      </button>
                    </td>
                  )}

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
                    {item}
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
