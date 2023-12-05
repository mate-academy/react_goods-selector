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
  selectedGood: string
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  }

  handleClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleRemoveClick = () => {
    this.setState({ selectedGood: '' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

          {selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleRemoveClick}
            />
          )}
        </h1>
        <table className="table">
          <tbody>
            {goods.map(good => (
              // eslint-disable-next-line max-len
              <tr key={good} data-cy="Good" className={selectedGood === good ? 'has-background-success-light' : ''}>
                <td>
                  {selectedGood !== good && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.handleClick(good)}
                    >
                      +
                    </button>
                  )}
                  {selectedGood === good && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.handleRemoveClick}
                    >
                      -
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
