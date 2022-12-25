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

export class App extends Component {
  state = {
    selectedGood: 'Jam',
  };

  deleteSelectionHandler = () => {
    this.setState({ selectedGood: '' });
  };

  addHandler = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood && <h1 className="title">No goods selected</h1>}
        {selectedGood && (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.deleteSelectionHandler}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={
                    selectedGood === good
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    {selectedGood !== good && (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.addHandler(good);
                        }}
                      >
                        +
                      </button>
                    )}

                    {selectedGood === good && (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.deleteSelectionHandler}
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
