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

type StateGood = {
  selectedGood: string;
};

export class App extends React.Component<{}, StateGood> {
  state = {
    selectedGood: 'Jam',
  };

  choosedGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const title = selectedGood
      ? `${selectedGood} is selected`
      : `No goods selected`;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {title}
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelection}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === selectedGood ? `has-background-success-light` : ''
                }
              >
                <td>
                  {selectedGood === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.clearSelection}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.choosedGood(good)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
