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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addSelectedGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.removeSelectedGood}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelectedGood = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={
                    isSelectedGood
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    {isSelectedGood ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.removeSelectedGood}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.addSelectedGood(good)}
                      >
                        -
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
