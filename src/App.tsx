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

  handleClick = (good: string) => {
    if (this.state.selectedGood !== good) {
      this.setState({ selectedGood: good });
    } else {
      this.setState({ selectedGood: '' });
    }
  };

  clearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length > 0 ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.clearButton()}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good, index) => (
              <tr
                data-cy="Good"
                key={index}
                onClick={() => this.handleClick(good)}
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${selectedGood === good ? 'is-info' : ''}`}
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
