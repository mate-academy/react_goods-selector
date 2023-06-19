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

  clearSelection = () => {
    this.setState({
      selectedGood: '',
    });
  };

  controlSelection = (name: string) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: (selectedGood === name) ? '' : name,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                aria-label="Clear"
                className="delete ml-3"
                onClick={this.clearSelection}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>

            {goods.map(name => {
              const isSelected = selectedGood === name;

              return (
                <tr
                  data-cy="Good"
                  key={name}
                  className={isSelected ? 'has-background-success-light' : ''}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={`button ${isSelected ? 'is-info' : ''}`}
                      onClick={() => this.controlSelection(name)}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {name}
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
