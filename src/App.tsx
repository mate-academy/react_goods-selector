import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

interface State {
  selectedGood: string;
}

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

export class App extends React.Component <{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClickClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  handleClickSelectedButton = (good:string) => {
    if (this.state.selectedGood === good) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: good });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClickClearButton}
                />
              </>
            )
            : (
              <>No goods selected</>
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        type="button"
                        className="button is-info"
                        onClick={(
                          () => this.handleClickSelectedButton(good))}
                        data-cy="RemoveButton"
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={(
                          () => this.handleClickSelectedButton(good))}
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
