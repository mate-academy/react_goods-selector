/* eslint-disable jsx-a11y/control-has-associated-label */

import { Component, ReactNode } from 'react';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

const goods = [
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

type State = { selectedGood: string };

export class App extends Component<{}, State> {
  state = { selectedGood: 'Jam' };

  isSelected = (item: string) => (
    item === this.state.selectedGood
  );

  clearSelected = () => (
    this.setState({ selectedGood: '' })
  );

  setSelected = (item: string) => (
    this.setState({
      selectedGood: this.isSelected(item)
        ? ''
        : item,
    })
  );

  render = (): ReactNode => {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={cn(
            'title', {
              'is-flex is-align-items-center': selectedGood,
            },
          )}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}

                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearSelected}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = this.isSelected(good);
              const setSelected = () => this.setSelected(good);

              return (
                <tr
                  data-cy="Good"
                  className={cn({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    <button
                      type="button"
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      className={cn(
                        'button',
                        { 'is-info': isSelected },
                      )}
                      onClick={setSelected}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  };
}
