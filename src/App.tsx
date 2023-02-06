import React from 'react';
import classNames from 'classnames';
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

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        { !selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' '}
              is selected

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
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
            {goods.map(food => {
              const booleanFood = selectedGood === food;

              return (
                <tr
                  data-cy="Good"
                  className={
                    classNames(
                      { 'has-background-success-light': booleanFood },
                    )
                  }
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={
                        classNames('button', { 'is-info': booleanFood })
                      }
                      onClick={() => {
                        this.setState({ selectedGood: food });
                      }}
                    >
                      { booleanFood ? '-' : '+' }
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {food}
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
