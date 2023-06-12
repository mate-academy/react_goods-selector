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

interface State {
  selectedGood: string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  handleAddSelection = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <>
                <h1 className="title is-flex is-align-items-center">
                  {`${selectedGood} is selected`}

                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                    onClick={this.handleClearSelection}
                  />
                </h1>
              </>
            )
            : <h1 className="title">No goods selected</h1>
        }
        <table className="table">
          <tbody>
            {goods.map(good => {
              const goodIsSelected = good === selectedGood;

              return (
                <tr
                  key={`${good}`}
                  data-cy="Good"
                  className={
                    `${
                      goodIsSelected
                        ? 'has-background-success-light'
                        : ''
                    }`
                  }
                >
                  <td>
                    {
                      goodIsSelected
                        ? (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.handleClearSelection}
                          >
                            -
                          </button>
                        )
                        : (
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => this.handleAddSelection(good)}
                          >
                            +
                          </button>
                        )
                    }
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
