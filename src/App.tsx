/* eslint-disable react/prefer-stateless-function */
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

export class App extends React.Component {
  state = {
    product: 'Jam',
  }

  handleClick = (value: string) => {
    this.setState({ product: value });
  }

  clearClick = () => {
    this.setState({ product: null });
  }

  render() {
    return (
      <main className="section container">
        {this.state.product
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.product} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.clearClick()}

              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map((good, index) => (
              this.state.product === good ? (
                <tr
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  data-cy="Good"
                  className="has-background-success-light"
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => this.clearClick()}
                    >
                      -
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index} data-cy="Good">
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.handleClick(good)}
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
