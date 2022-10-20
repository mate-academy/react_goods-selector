/* eslint-disable jsx-a11y/control-has-associated-label */
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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  cleanGoods = () => this.setState(
    { selectedGood: '' },
  );

  addGood = (good: string) => this.setState(
    { selectedGood: good },
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' '}
              is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.cleanGoods}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <>
                  {
                    isSelected
                      ? (
                        <tr
                          data-cy="Good"
                          key={good}
                          className={`${
                            'has-background-success-light'
                          }`}
                        >
                          <td>
                            <button
                              data-cy="RemoveButton"
                              type="button"
                              className="button is-info"
                              onClick={this.cleanGoods}
                            >
                              -
                            </button>
                          </td>
                          <td
                            data-cy="GoodTitle"
                            className="is-vcentered"
                          >
                            {good}
                          </td>
                        </tr>
                      )
                      : (
                        <tr
                          data-cy="Good"
                          key={good}
                        >
                          <td>
                            <button
                              data-cy="AddButton"
                              type="button"
                              className="button"
                              onClick={() => this.addGood(good)}
                            >
                              +
                            </button>
                          </td>
                          <td
                            data-cy="GoodTitle"
                            className="is-vcentered"
                          >
                            {good}
                          </td>
                        </tr>
                      )
                  }
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
