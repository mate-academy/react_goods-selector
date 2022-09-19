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
  state = {
    selectedGood: 'Jam',
  };

  isSelectedGood(selectedGood: string, good: string) {
    return (selectedGood === good
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: good })
    );
  }

  render() {
    const { selectedGood } = this.state;

    return (

      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => this.setState({ selectedGood: '' })}
            style={{
              display: selectedGood ? 'block' : 'none',
            }}
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': selectedGood === good },
                )}
              >
                <td>
                  <button
                    data-cy={(selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton')}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': selectedGood === good },
                    )}
                    onClick={() => {
                      this.isSelectedGood(selectedGood, good);
                    }}
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
