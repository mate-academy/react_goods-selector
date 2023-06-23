/* eslint-disable jsx-a11y/control-has-associated-label */
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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handlerChangeState = (value: string) => {
    const { selectedGood } = this.state;

    this.setState({ selectedGood: value !== selectedGood ? value : '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood && (
          <h1 className="title">
            No goods selected
          </h1>
        )}

        {selectedGood && (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => (this.handlerChangeState(''))}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': selectedGood === good },
                  )}
                >
                  <td>
                    <button
                      data-cy={selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={
                        classNames(
                          'button',
                          { 'is-info': selectedGood === good },
                        )
                      }
                      onClick={() => (this.handlerChangeState(good))}
                    >
                      {selectedGood === good ? '-' : '+'}
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
