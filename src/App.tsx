import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string | '') => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex': selectedGood },
          { 'is-align-items-center': selectedGood },
        )}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => this.selectGood('')}
                />
              </>
            ) : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={uuidv4()}
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={isSelected
                        ? 'button is-info'
                        : 'button'}
                      onClick={isSelected
                        ? () => this.selectGood('')
                        : () => this.selectGood(good)}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
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
