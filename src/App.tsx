/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react';
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
  selectedGood: string
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  editSelectedGood = (good: string) => {
    this.setState((state: Readonly<State>) => ({
      selectedGood: (state.selectedGood !== good ? good : ''),
    }));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
              />
            </h1>
          ) : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const currentItem = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={currentItem ? 'has-background-success-light' : ''}
                >
                  <td>
                    <button
                      data-cy={currentItem ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={currentItem ? 'button is-info' : 'button'}
                      onClick={() => this.editSelectedGood(good)}
                    >
                      {currentItem ? '-' : '+'}
                    </button>
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
