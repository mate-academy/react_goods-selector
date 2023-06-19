/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  selectedGood: string
};

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    selectedGood: 'Jam',
  };

  handleClick = (name: string): void => {
    if (this.state.selectedGood === name) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: name });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.handleClick('')}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const btnClassName = cn('button', {
                'is-info': good === selectedGood,
              });

              const trClassName = cn({
                'has-background-success-light': good === selectedGood,
              });

              return (
                <tr data-cy="Good" key={good} className={trClassName}>
                  <td>
                    <button
                      data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={btnClassName}
                      onClick={() => this.handleClick(good)}
                    >
                      {good === selectedGood ? '-' : '+'}
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
