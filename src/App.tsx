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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  handleClick = (good: string) => {
    return () => this.setState({ selectedGood: good });
  }

  handleClear = () => {
    this.setState({
      selectedGood: '',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                onClick={this.handleClear}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map((good) => {
              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={good === selectedGood
                    ? 'has-background-success-light'
                    : undefined}
                >
                  {good === this.state.selectedGood
                    ? (
                      <td>
                        <button
                          onClick={this.handleClear}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          onClick={this.handleClick(good)}
                          data-cy="AddButton"
                          type="button"
                          className="button"
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
