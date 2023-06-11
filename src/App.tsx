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

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? (
              `${selectedGood} is selected`
            )
            : (
              'No goods selected'
            )}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy={selectedGood ? 'ClearButton' : ''}
            type="button"
            className={classNames(
              'delete ml-3',
              { 'is-hidden': !selectedGood },
            )}
            onClick={() => {
              this.setState({
                selectedGood: '',
              });
            }}
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info': selectedGood === good,
                    })}
                    onClick={() => {
                      this.setState(prevState => ({
                        selectedGood: prevState.selectedGood === good
                          ? ''
                          : good,
                      }));
                    }}
                  >
                    {selectedGood === good ? ('-') : ('+')}
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
