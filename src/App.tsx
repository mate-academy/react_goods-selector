/* eslint-disable jsx-a11y/control-has-associated-label */
import 'bulma/css/bulma.css';
import React from 'react';
import './App.scss';

const goods = [
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

type StateType = {
  selectedGood: string | null,
};

export class App extends React.Component {
  state: StateType = {
    selectedGood: 'Jam',
  };

  clearCartHandler = () => {
    this.setState({ selectedGood: null });
  };

  selectGoodHandler(name: string) {
    this.setState((prevState: StateType) => ({
      selectedGood: prevState.selectedGood !== name
        ? name
        : null,
    }));
  }

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGood}
            {' '}
            is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearCartHandler}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  this.state.selectedGood === good
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  <button
                    data-cy={this.state.selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={`button ${
                      this.state.selectedGood === good && 'is-info'
                    }`}
                    onClick={() => this.selectGoodHandler(good)}
                  >
                    {this.state.selectedGood === good ? '-' : '+'}
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
