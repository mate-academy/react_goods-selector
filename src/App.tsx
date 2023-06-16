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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {(selectedGood !== '')
          ? (
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
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>

            {goods.map(name => (
              <tr
                data-cy="Good"
                key={name}
                className={
                  (selectedGood === name)
                    ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      (selectedGood === name)
                        ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${
                      (selectedGood === name)
                        ? 'is-info' : ''
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedGood: (selectedGood === name) ? '' : name,
                      });
                    }}
                  >
                    {selectedGood === name ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
