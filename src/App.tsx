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
    this.setState({ selectedGood: '' });
  };

  handAddRemoveButton = (currGood: string) => {
    if (currGood === this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: currGood });
    }
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
              onClick={() => this.handleClearButton()}
            />
          </h1>
        ) : (
          <h1 className="title">
            No goods selected
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={good === selectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={selectedGood === good
                      ? 'is-info'
                      : 'button'}
                    onClick={() => this.handAddRemoveButton(good)}
                  >
                    {selectedGood === good ? '-' : '+'}
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
