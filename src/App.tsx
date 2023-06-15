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
  selected: boolean,
  symbols: { [key: string]: string };
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    selected: true,
    symbols: {
      Jam: '-',
    },
  };

  render() {
    const { selectedGood, selected, symbols } = this.state;

    return (
      <main className="section container">
        {selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  Object.keys(symbols).forEach(key => {
                    symbols[key] = '+';
                  });

                  this.setState({
                    selected: false,
                    symbols,
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
                  (selectedGood === name && symbols[name] === '-')
                    ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      (selectedGood === name && symbols[name] === '-')
                        ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${
                      (selectedGood === name && symbols[name] === '-')
                        ? 'is-info' : ''
                    }`}
                    onClick={() => {
                      const updatedSymbols = { ...symbols };

                      if (selectedGood === name) {
                        updatedSymbols[name] = symbols[name] === '-'
                          ? '+' : '-';
                      } else {
                        updatedSymbols[name] = '-';
                        updatedSymbols[selectedGood] = '+';
                      }

                      this.setState({
                        selectedGood: name,
                        selected: updatedSymbols[name] === '-',
                        symbols: updatedSymbols,
                      });
                    }}
                  >
                    {selectedGood === name ? symbols[name] : '+'}
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
