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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
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
        {selectedGood === ''
          ? (<h1 className="title">No goods selected</h1>)
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                onClick={this.handleClearButton}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : undefined}
              >
                {selectedGood !== good
                  ? (
                    <td>
                      <button
                        onClick={() => this.setState({ selectedGood: good })}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    </td>
                  )
                  : (
                    <td>
                      <button
                        onClick={this.handleClearButton}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>
                  )}
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
