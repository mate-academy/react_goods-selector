import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component <{}, State> {
  state = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  handleSelectGood = (good:string) => {
    this.setState((prevState) => ({
      selectedGood:
      prevState.selectedGood === good ? '' : good,
    }));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <>
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState({
                      selectedGood: '',
                    });
                  }}
                />
              </h1>
            </>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            { goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={(selectedGood === good)
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    type="button"
                    onClick={() => this.handleSelectGood(good)}
                    className={(selectedGood === good)
                      ? 'button is-info'
                      : 'button'}
                    data-cy={(selectedGood === good)
                      ? 'RemoveButton'
                      : 'AddButton'}
                  >
                    { (selectedGood === good) ? '-' : '+'}
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
