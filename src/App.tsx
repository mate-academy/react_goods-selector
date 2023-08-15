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

interface State {
  selectedGood: (typeof goods) [number] | null
}

export class App extends React.Component {
  state: Readonly<State> = {
    selectedGood: goods[8],
  };

  deleteGood = () => {
    this.setState({
      selectedGood: null,
    });
  };

  addGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === null ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.deleteGood}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelectedGood = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={
                    isSelectedGood
                      ? 'has-background-success-light'
                      : ''
                  }
                  key={good}
                >
                  <td>
                    <button
                      data-cy={
                        isSelectedGood
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={`button ${
                        isSelectedGood ? 'is-info' : ''
                      }`}
                      onClick={
                        isSelectedGood
                          ? this.deleteGood
                          : () => this.addGood(good)
                      }
                    >
                      {isSelectedGood ? '-' : '+'}
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
