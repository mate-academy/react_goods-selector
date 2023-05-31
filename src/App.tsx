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

type Good = string;

type State = {
  selectedGood: Good;
  isSelected: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
    isSelected: true,
  };

  handleSelectClick = (good: string) => {
    this.setState({
      isSelected: true,
      selectedGood: good,
    });
  };

  handleRemoveClick = () => {
    this.setState({
      isSelected: false,
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood, isSelected } = this.state;

    return (
      <div>
        <main className="section container">
          {!isSelected
            ? <h1 className="title">No goods selected</h1>
            : (
              <div>
                <h1 className="title is-flex is-align-items-center">
                  {`${selectedGood} is selected`}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                    aria-label="Clear selected good"
                    onClick={() => this.handleRemoveClick()}
                  />
                </h1>
              </div>
            )}

          <table className="table">
            <tbody>
              {goods.map((good) => (
                <tr
                  key={good}
                  data-cy="Good"
                  className={`${selectedGood === good ? 'has-background-success-light' : ''}`}
                >
                  <td>
                    {selectedGood === good ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.handleRemoveClick()}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleSelectClick(good)}
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
      </div>
    );
  }
}
