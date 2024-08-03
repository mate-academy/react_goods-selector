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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  deleteGood = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const selectGood = this.state.selectedGood;
    const title =
      selectGood === '' ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={this.deleteGood}
          />
        </h1>
      );

    return (
      <main className="section container">
        {title}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': selectGood === good,
                })}
              >
                <td>
                  {selectGood === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.deleteGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.addGood(good)}
                    >
                      +
                    </button>
                  )}
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
