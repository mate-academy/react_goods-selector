/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react';
import classNames from 'classnames';
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
  selectedGood: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  selectHandler = (good: string) => {
    const checkState = this.state.selectedGood === good;

    this.setState({ selectedGood: checkState ? null : good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({ selectedGood: null });
              }}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const checkGood = good === selectedGood;
              const goodClass = classNames(
                { 'has-background-success-light': checkGood },
              );
              const buttonClass = classNames(
                'button',
                { 'is-info': checkGood },
              );

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={goodClass}
                >
                  <td>
                    <button
                      data-cy={checkGood ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={buttonClass}
                      onClick={() => this.selectHandler(good)}
                    >
                      {checkGood ? '-' : '+'}
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
