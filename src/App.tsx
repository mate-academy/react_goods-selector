import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  handleSelectedGood = (goodName: string) => {
    this.setState({
      selectedGood: goodName,
    });
  };

  render() {
    return (
      <main className="section container">
        {
          (this.state.selectedGood) ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              <button
                aria-label="clear selection"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.handleSelectedGood('')}
              />
            </h1>
          ) : (
            <h1 className="title">No goods selected</h1>
          )
        }

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isCurrentGoodSelected = good === this.state.selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames({
                    'has-background-success-light': isCurrentGoodSelected,
                  })}
                >
                  <td>
                    {isCurrentGoodSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.handleSelectedGood('')}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.handleSelectedGood(good)}
                        >
                          +
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
