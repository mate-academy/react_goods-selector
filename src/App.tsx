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

  handleRemove = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? (`${selectedGood} is selected`) : 'No goods selected'}
          {
            selectedGood && (
              <button
                aria-label="Mute volume"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleRemove}
              />
            )
          }
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good ? 'RemoveButton' : 'AddButton'
                    }
                    // data-cy="AddButton"
                    type="button"
                    className={
                      selectedGood === good ? 'button is-info' : 'button'
                    }
                    onClick={() => this.setState({ selectedGood: good })}
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
