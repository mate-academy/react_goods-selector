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
    selectedGood: goods[8],
  };

  deleteGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  addGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  generateHeader() {
    const { selectedGood } = this.state;

    if (selectedGood === '') {
      return <h1 className="title">No goods selected</h1>;
    }

    return (
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
    );
  }

  render() {
    let goodKey = 0;

    return (
      <main className="section container">
        {this.generateHeader()}

        <table className="table">
          <tbody>
            {goods.map(good => {
              goodKey += 1;
              if (good === this.state.selectedGood) {
                return (
                  <tr
                    data-cy="Good"
                    className="has-background-success-light"
                    key={goodKey}
                  >
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

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                );
              }

              return (
                <tr data-cy="Good" key={goodKey}>
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
