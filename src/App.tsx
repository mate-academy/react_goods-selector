/* eslint-disable jsx-a11y/control-has-associated-label */
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
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
                  selectedGood === good
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  <button
                    data-cy={selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button', { 'is-info': selectedGood === good },
                    )}
                    onClick={() => this.selectGoodHandler(good)}
                  >
                    {selectedGood === good ? '-' : '+'}
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
