import React from 'react';
import classNames from 'classnames';
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
    }
  };

  handleRemoveFunction = (event: React.MouseEvent<HTMLElement>): void => {
    const { target } = event;

    if (this.state.selectedGood
      && (target as HTMLButtonElement).type === 'button') {
      this.setState({
        selectedGood: '',
      });
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
              No goods selected
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
                className={classNames({
                  'has-background-success-light':
                    (good === this.state.selectedGood),
                })}
              >
                <td>
                  <button
                    data-cy={
                      this.state.selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info':
                        (good === this.state.selectedGood),
                    })}
                  >
                    {good === this.state.selectedGood
                      ? '-'
                      : '+'}
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
