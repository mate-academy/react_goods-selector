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
  selectedGood: string | undefined;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    selectedGood: 'Jam',
  };

  handleTaskClick = (good?: string) => {
    this.setState({ selectedGood: good });
  };

  setDefault = () => {
    this.setState({ selectedGood: undefined });
  };

  render() {
    const currState = this.state.selectedGood;
    const postList = goods.map(good => {
      return (
        <tr
          key={good}
          data-cy="Good"
          className={
            currState === good ? 'has-background-success-light' : undefined
          }
        >
          <td>
            <button
              data-cy={currState === good ? 'RemoveButton' : 'AddButton'}
              type="button"
              className={currState === good ? 'button is-info' : 'button'}
              onClick={() => (currState === good
                ? this.setDefault()
                : this.handleTaskClick(good))}
            >
              {currState === good ? '-' : '+'}
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      );
    });

    return (
      <main className="section container">
        {this.state.selectedGood === undefined
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {this.state.selectedGood}
              {' '}
              is selected

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy={currState !== undefined ? 'ClearButton' : 'AddButton'}
                type="button"
                className="delete ml-3"
                onClick={this.setDefault}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {postList}
          </tbody>
        </table>
      </main>
    );
  }
}
