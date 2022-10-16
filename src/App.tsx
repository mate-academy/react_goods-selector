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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClearSelect = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelectGood = (good: string) => {
    if (good === this.state.selectedGood) {
      this.handleClearSelect();
    } else {
      this.setState({ selectedGood: good });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearSelect}
            />
          </h1>
        ) : (
          <h1 className="title">
            No goods selected
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good: string) => {
              const isGoodSelected = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={cn({
                    'has-background-success-light': isGoodSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={cn('button', { 'is-info': isGoodSelected })}
                      onClick={() => this.handleSelectGood(good)}
                    >
                      {isGoodSelected ? '-' : '+'}
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
