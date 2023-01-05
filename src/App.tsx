import React from 'react';
import className from 'classnames';
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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  deselectGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          <h1 className={className('title', {
            'is-flex is-align-items-center': selectedGood,
          })}
          >
            {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

            {
              selectedGood
              && (
                /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.deselectGood}
                />
              )
            }
          </h1>
        }

        <table className="table">
          <tbody>
            {
              goods.map(good => (
                <tr
                  data-cy="Good"
                  key={good}
                  className={className({
                    'has-background-success-light': selectedGood === good,
                  })}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.deselectGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.selectGood(good)}
                        >
                          +
                        </button>
                      )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    );
  }
}
