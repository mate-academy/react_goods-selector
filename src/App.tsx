/* eslint-disable react/prefer-stateless-function */
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

type Props = {};

interface State {
  selectedGood: string | null,
  isSelected: boolean,
}

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    isSelected: true,
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good, isSelected: true });
  };

  unselectGood = () => {
    this.setState({ selectedGood: '', isSelected: false });
  };

  render() {
    const { selectedGood, isSelected } = this.state;

    return (
      <main className="section container">
        <h1 className={
          !isSelected
            ? 'title'
            : 'title is-flex is-align-items-center'
        }
        >
          {!isSelected
            ? 'No goods selected'
            : `${selectedGood} is selected`}

          {isSelected && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              onClick={() => this.unselectGood()}
              className="delete ml-3"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelectedGood = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={
                    isSelectedGood ? 'has-background-success-light' : ''
                  }
                >

                  {isSelectedGood
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.unselectGood}
                        >
                          -
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.selectGood(good)}
                        >
                          +
                        </button>
                      </td>
                    )}

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </main>
    );
  }
}
