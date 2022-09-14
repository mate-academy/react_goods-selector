/* eslint-disable jsx-a11y/control-has-associated-label */
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
  selectedGood: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleIsSelected = (good: string) => {
    this.setState({ selectedGood: good });
  };

  deleteGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length === 0
          ? (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

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
              const chosenGood = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': chosenGood,
                  })}
                >
                  {chosenGood
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.deleteGood}
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
                          onClick={() => this.handleIsSelected(good)}
                        >
                          +
                        </button>
                      </td>
                    )}
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
  }
}
