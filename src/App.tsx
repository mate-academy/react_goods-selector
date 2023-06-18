import { Component } from 'react';
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

export class App extends Component {
  state = {
    selectedGood: 'Jam',
  };

  handleAddClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const isGoodSelected = selectedGood.length > 0;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {isGoodSelected ? `${selectedGood} is selected` : 'No goods selected'}
          {isGoodSelected && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.handleClearButton()}
            >
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            </button>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames('', {
                    'has-background-success-light': good === selectedGood,
                  })}
                >
                  <td>
                    {good === selectedGood ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.handleClearButton()}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleAddClick(good)}
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
