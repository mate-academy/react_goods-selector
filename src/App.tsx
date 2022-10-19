import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  { good: 'Dumplings', id: 1 },
  { good: 'Carrot', id: 2 },
  { good: 'Eggs', id: 3 },
  { good: 'Ice cream', id: 4 },
  { good: 'Apple', id: 5 },
  { good: 'Bread', id: 6 },
  { good: 'Fish', id: 7 },
  { good: 'Honey', id: 8 },
  { good: 'Jam', id: 9 },
  { good: 'Garlic', id: 10 },
];

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex is-align-items-center': selectedGood },
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
                  onClick={() => {
                    this.setState({ selectedGood: '' });
                  }}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(({ good, id }) => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={id}
                  className={
                    classNames({
                      'has-background-success-light': isSelected,
                    })
                  }
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={
                        classNames('button', {
                          'is-info': isSelected,
                        })
                      }
                      onClick={() => {
                        const value = isSelected ? '' : good;

                        this.setState({ selectedGood: value });
                      }}
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
