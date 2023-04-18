/* eslint-disable no-param-reassign */
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
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  handleAddButton = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const newGood
    = target.parentElement?.nextElementSibling?.textContent;

    if (target.className === 'button') {
      this.setState({ selectedGood: newGood });
    } else {
      this.setState({ selectedGood: '' });
    }
  };

  render() {
    const { selectedGood } = this.state;
    const goodLength = selectedGood.length;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          { (goodLength)
            ? (
              `${selectedGood} is selected`
            )
            : 'No goods selected' }

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            style={{
              display: (!goodLength)
                ? 'none'
                : 'flex',
            }}
            onClick={this.handleClearButton}
          />
        </h1>

        <table className="table">
          <tbody>
            { goods.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={isSelected
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={isSelected ? 'button is-info' : 'button'}
                      style={{ display: 'flex' }}
                      onClick={(e) => this.handleAddButton(e)}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered" id={good}>
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
