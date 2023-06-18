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
  isSelected: string
};

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    isSelected: 'Jam',
  };

  handleClick = (name: string): void => {
    if (this.state.isSelected === name) {
      this.setState({ isSelected: '' });
    } else {
      this.setState({ isSelected: name });
    }
  };

  render() {
    const { isSelected } = this.state;

    return (
      <main className="section container">
        {isSelected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${isSelected} is selected`}
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
              const btnClassName = cn({
                button: true,
                'is-info': good === isSelected,
              });

              const trClassName = cn({
                'has-background-success-light': good === isSelected,
              });

              return (
                <tr data-cy="Good" key={good} className={trClassName}>
                  <td>
                    <button
                      data-cy={good === isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={btnClassName}
                      onClick={() => this.handleClick(good)}
                    >
                      {good === isSelected ? '-' : '+'}
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
