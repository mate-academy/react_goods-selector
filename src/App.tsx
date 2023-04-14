import 'bulma/css/bulma.css';
import './App.scss';
import { Component } from 'react';
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

interface State {
  selectedGood: string,
}

export class App extends Component {
  state: Readonly<State> = {
    selectedGood: '',
  };

  handleAddButtonClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleRemoveButtonClick = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        { !selectedGood.length
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isGoodSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    classNames(
                      '',
                      { 'has-background-success-light': isGoodSelected },
                    )
                  }
                >
                  <td>
                    {!isGoodSelected
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.handleAddButtonClick(good);
                          }}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleRemoveButtonClick}
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
