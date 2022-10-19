import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods = [
  {
    name: 'Dumplings',
    id: 1,
  },
  {
    name: 'Carrot',
    id: 2,
  },
  {
    name: 'Eggs',
    id: 3,
  },
  {
    name: 'Ice cream',
    id: 4,
  },
  {
    name: 'Apple',
    id: 5,
  },
  {
    name: 'Bread',
    id: 6,
  },
  {
    name: 'Fish',
    id: 7,
  },
  {
    name: 'Honey',
    id: 8,
  },
  {
    name: 'Jam',
    id: 9,
  },
  {
    name: 'Garlic',
    id: 10,
  },
];

interface Good {
  name: string,
  id:number,
}

type State = {
  selectedGood: Good | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: goods[8],
  };

  selectGood = (good:Good | null) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames('title', {
            'is-flex': selectedGood,
            'is-align-items-center': selectedGood,
          })}
        >
          {!selectedGood ? (
            'No goods selected'
          ) : (
            <>
              {`${selectedGood.name} is selected`}
              <button
                aria-label="Select good"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.selectGood(null)}
              />
            </>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const goodIsSelected = good.id === selectedGood?.id;

              return (
                <tr
                  key={good.id}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': goodIsSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={goodIsSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'is-info': goodIsSelected,
                      })}
                      onClick={() => this.selectGood(goodIsSelected
                        ? null
                        : good)}
                    >
                      {goodIsSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good.name}
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
