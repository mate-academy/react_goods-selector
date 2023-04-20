/* eslint-disable no-param-reassign */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  handleAddButton = (condition: boolean, newGood: string) => {
    this.setState({
      selectedGood: (!condition)
        ? newGood
        : '',
    });
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
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
              display: goodLength
                ? 'flex'
                : 'none',
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
                  className={classNames(
                    'unselected',
                    { 'has-background-success-light': isSelected },
                  )}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button', { 'button is-info': isSelected },
                      )}
                      style={{ display: 'flex' }}
                      onClick={() => this.handleAddButton(isSelected, good)}
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
