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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  save = (good: string) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: selectedGood === good ? '' : good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={
            classNames(
              'title',
              {
                'is-flex': selectedGood !== '',
                'is-align-items-center': selectedGood !== '',
              },
            )
          }
        >
          {selectedGood === ''
            ? 'No goods selected'
            : (
              <>
                {selectedGood }
                {' '}
                is selected
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    this.save(selectedGood);
                  }}
                />
              </>
            )}
        </h1>
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  classNames({
                    'has-background-success-light': selectedGood === good,
                  })
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={
                      classNames('button', { 'is-info': selectedGood === good })
                    }
                    onClick={() => {
                      this.save(good);
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
