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

  handleClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClickRemove = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClickRemove}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}
        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={
                  selectedGood === good
                    ? 'has-background-success-light'
                    : '' }
                    key={good}
              >
                {selectedGood === good ? (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.handleClickRemove}
                    >
                      -
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.handleClick(good);
                      }}
                    >
                      +
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
