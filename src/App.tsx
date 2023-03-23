import { Component } from 'react';
import classNames from 'classnames';
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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleDeleteGood = () => {
    this.setState({ selectedGood: '' });
  };

  handleAddGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? (
            <h1 className="title">No goods selected</h1>
          ) : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleDeleteGood}
                aria-label="clear"
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isGoodSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isGoodSelected,
                  })}
                >
                  {isGoodSelected
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleDeleteGood}
                        >
                          -
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.handleAddGood(good);
                          }}
                        >
                          +
                        </button>
                      </td>
                    )}

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
