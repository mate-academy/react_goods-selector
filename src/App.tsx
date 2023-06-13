import React from 'react';
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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleSelect = (item: string) => {
    this.setState({
      selectedGood: item,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.handleSelect('')}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>

            {goods.map(item => (
              <tr
                key={item}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': selectedGood === item,
                })}
              >
                <td>
                  <button
                    data-cy={selectedGood === item
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'is-info': selectedGood === item,
                    })}
                    onClick={selectedGood === item
                      ? () => this.handleSelect('')
                      : () => this.handleSelect(item)}
                  >
                    {selectedGood === item
                      ? '-'
                      : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
