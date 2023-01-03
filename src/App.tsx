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

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  addSelectedGood = (good:string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          (this.state.selectedGood === '')
            ? (
              <h1 className="title">No goods selected</h1>
            )
            : (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeSelectedGood}
                />
              </h1>
            )
        }

        <table className="table">
          {goods.map((good) => {
            return (
              <>
                <tbody key={good}>
                  {
                    (this.state.selectedGood !== good)
                      ? (
                        <tr data-cy="Good" key={good}>
                          <td>
                            <button
                              data-cy="AddButton"
                              type="button"
                              className="button"
                              onClick={() => {
                                this.addSelectedGood(good);
                              }}
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
                      : (
                        <tr
                          data-cy="Good"
                          className="has-background-success-light"
                          key={good}
                        >
                          <td>
                            <button
                              data-cy="RemoveButton"
                              type="button"
                              className="button is-info"
                              onClick={this.removeSelectedGood}
                            >
                              -
                            </button>
                          </td>
                          <td data-cy="GoodTitle" className="is-vcentered">
                            {good}
                          </td>
                        </tr>
                      )
                  }
                </tbody>
              </>
            );
          })}
        </table>
      </main>
    );
  }
}
