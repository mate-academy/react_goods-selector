import cn from 'classnames';
import React from 'react';
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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  setSelectedEmpty = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClick = (good: string, isGoodSelected: string) => {
    if (isGoodSelected) {
      this.setSelectedEmpty();
    } else {
      this.addGood(good);
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {!selectedGood ? 'No goods selected' : `${selectedGood} is selected`}
          {!!selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.setSelectedEmpty}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isGoodSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={cn({
                    'has-background-success-light': isGoodSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={cn('button', {
                        'is-info': isGoodSelected,
                      })}
                      onClick={() => {
                        this.handleClick(good, selectedGood);
                      }}
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
