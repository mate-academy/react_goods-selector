import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

/* <h1 className="title is-flex is-align-items-center">
Jam is selected

eslint-disable-next-line jsx-a11y/control-has-associated-label
<button
  data-cy="ClearButton"
  type="button"
  className="delete ml-3"
/>
</h1> */

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
    selectedClass: 'has-background-success-light',
    noOneSelected: 'No goods selected',
    addButtonText: '+',
    removeButtonText: '-',
  };

  handleAddFunction = (event: React.MouseEvent<HTMLElement>): void => {
    const { target } = event;

    if ((target as HTMLButtonElement).type === 'button') {
      if (event.currentTarget.lastChild !== null) {
        this.setState({
          selectedGood: (event.currentTarget.lastChild as HTMLTableCellElement)
            .innerText,
        });
      }

      event.currentTarget.classList.add(this.state.selectedClass);
      (target as HTMLButtonElement).innerText = this.state.removeButtonText;
    }
  };

  handleRemoveFunction = (event: React.MouseEvent<HTMLElement>): void => {
    const { target } = event;

    if (this.state.selectedGood
      && (target as HTMLButtonElement).type === 'button') {
      this.setState({
        selectedGood: '',
      });
      event.currentTarget.classList.remove(this.state.selectedClass);
      (target as HTMLButtonElement).innerText = this.state.addButtonText;
    }
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleRemoveFunction}
              />
            </h1>
          ) : (
            <h1 className="title">
              {this.state.noOneSelected}
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={goods.indexOf(good)}
                data-cy="Good"
                onClick={good === this.state.selectedGood
                  ? this.handleRemoveFunction
                  : this.handleAddFunction}
                className={good === this.state.selectedGood
                  ? this.state.selectedClass
                  : ''}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    {good === this.state.selectedGood
                      ? this.state.removeButtonText
                      : this.state.addButtonText}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
