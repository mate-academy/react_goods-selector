import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  selectedGood: string,
};

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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleAddButton = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handleRemoveButton = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className={`title${selectedGood && ' is-flex is-align-items-center'}`}>
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood
            && (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleRemoveButton}
              />
            )}
        </h1>

        <table className="table">
          <tbody>

            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={`Good ${
                    selectedGood === good
                      ? 'has-background-success-light'
                      : ''
                  }`}
                  key={Math.random()}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleRemoveButton}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.handleAddButton(good);
                          }}
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
