import React, { Component } from 'react';

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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  add = (good: string) => {
    this.setState({ selectedGood: good });
  };

  remove = () => {
    this.setState({ selectedGood: '' });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {
                (
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                    onClick={() => this.remove()}
                  />
                )
              }
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    selectedGood === good
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        selectedGood === good
                          ? 'AddButton'
                          : 'RemoveButton'
                      }
                      type="button"
                      className={
                        classNames('button',
                          selectedGood === good ? 'is-info' : '')
                      }
                      onClick={
                        selectedGood === good
                          ? () => this.remove()
                          : () => this.add(good)
                      }
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
