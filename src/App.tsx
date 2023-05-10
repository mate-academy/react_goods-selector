/* eslint-disable jsx-a11y/control-has-associated-label */
import 'bulma/css/bulma.css';
import './App.scss';
import { Component } from 'react';

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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleSelect = (item: string) => {
    this.setState({ selectedGood: item });
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    const goodsElements = goods.map(good => (
      <tr
        data-cy="Good"
        className={selectedGood === good ? 'has-background-success-light' : ''}
      >
        <td>
          {selectedGood !== good
            ? (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => this.handleSelect(good)}
              >
                +
              </button>
            )
            : (
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={this.handleClear}
              >
                -
              </button>
            )}
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    ));

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood.length ? `${selectedGood} is selected` : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedGood.length > 0
            && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            )}

        </h1>

        <table className="table">
          <tbody>
            {goodsElements}
          </tbody>
        </table>
      </main>
    );
  }
}
