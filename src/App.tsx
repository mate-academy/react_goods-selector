import { Component } from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';

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

type AppState = {
  selectedGood: string;
};

export class App extends Component<{}, AppState> {
  state = { selectedGood: 'Jam' }

  handleClearClick = () => {
    this.setState({ selectedGood: '' });
  }

  handleListClick = (good: string) => {
    this.setState({ selectedGood: good });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClearClick}
              />
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = good === selectedGood;
              const buttonClass = cn({ button: true, 'is-info': isSelected });
              const trClass = cn({
                'has-background-success-light': isSelected,
              });
              const forClick = isSelected ? '' : good;

              return (
                <tr data-cy="Good" className={trClass} key={good}>
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={buttonClass}
                      onClick={() => this.handleListClick(forClick)}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
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
