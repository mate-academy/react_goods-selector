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
  selected: boolean,
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selected: true,
    selectedGood: 'Jam',
  };

  pickGood = (good: string) => {
    this.setState({
      selected: true,
      selectedGood: good,
    });
  };

  removeGood = () => {
    this.setState({
      selected: false,
      selectedGood: '',
    });
  };

  classForGood = (selectedGood: string, good: string) => (
    selectedGood === good
      ? 'has-background-success-light'
      : ''
  );

  render() {
    const { selected, selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selected
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeGood}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {
              goods.map(good => (
                <tr
                  data-cy="Good"
                  key={good}
                  className={this.classForGood(selectedGood, good)}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.removeGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.pickGood(good)}
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
