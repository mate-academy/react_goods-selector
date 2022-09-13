import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  state: State = {
    selectedGood: 'Jam',
  };

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
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

              <button
                aria-label="Remove"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearSelection}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  classNames('',
                    { 'has-background-success-light': selectedGood === good })
                }
              >

                <td>
                  <button
                    data-cy={
                      classNames(
                        { RemoveButton: selectedGood === good },
                        { AddButton: selectedGood !== good },
                      )
                    }
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': selectedGood === good },
                    )}
                    onClick={selectedGood === good
                      ? this.clearSelection
                      : () => {
                        this.selectGood(good);
                      }}
                  >
                    {selectedGood === good
                      ? ('-')
                      : ('+')}
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
