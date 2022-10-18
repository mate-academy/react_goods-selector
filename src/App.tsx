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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (selectedGood: string) => {
    this.setState({ selectedGood });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={
          classNames(
            'title',
            { 'is-flex is-align-items-center': selectedGood },
          )
        }
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}
                <button
                  data-cy="ClearButton"
                  aria-label="Remove button"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeSelectedGood}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isActive = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    {
                      'has-background-success-light': isActive,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={
                        classNames('button', { 'is-info': isActive })
                      }
                      onClick={
                        isActive
                          ? this.removeSelectedGood
                          : () => this.selectGood(good)
                      }
                    >
                      {isActive ? '-' : '+'}
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
