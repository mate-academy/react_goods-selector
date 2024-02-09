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

export class App extends React.Component {
  state: State = {
    selectedGood: 'Jam',
  };

  handleClick(goodName: string) {
    if (goodName === this.state.selectedGood) {
      this.setState({ selectedGood: '' });

      return;
    }

    this.setState({ selectedGood: goodName });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.handleClick('')}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={selectedGood === good
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={selectedGood === good
                      ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${selectedGood === good ? 'is-info' : ''}`}
                    onClick={() => this.handleClick(good)}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
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
