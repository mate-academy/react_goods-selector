/* eslint-disable jsx-a11y/control-has-associated-label */
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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleState = (event: React.MouseEvent<HTMLButtonElement>, word: string) => {
    const data = (event.target as HTMLButtonElement).dataset.cy;

    this.setState({
      selectedGood: word,
    });

    if (data === 'RemoveButton') {
      this.setState({
        selectedGood: '',
      });
    }
  };

  handleClearButton = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={`title ${selectedGood && 'is-flex is-align-items-center'}`}>
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.handleClearButton()}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isActive = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={`${isActive && 'has-background-success-light'}`}
                  key={good}
                >
                  <td>
                    <button
                      data-cy={`${isActive
                        ? 'RemoveButton'
                        : 'AddButton'
                      }`}
                      type="button"
                      className={`button ${isActive && 'is-info'}`}
                      onClick={(event) => {
                        this.handleState(event, good);
                      }}
                    >
                      {`${isActive
                        ? '-'
                        : '+'}`}
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
