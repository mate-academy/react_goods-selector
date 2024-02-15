import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  handlerSelect = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handlerClear = () => {
    this.setState({
      selectedGood: '',
    });
  };

  helperSelector = (good: string): (() => void) | undefined => {
    if (this.state.selectedGood === good) {
      return this.handlerClear;
    }

    return () => this.handlerSelect(good);
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              onClick={this.handlerClear}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good: string) => (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    onClick={this.helperSelector(good)}
                    data-cy={selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={cn({
                      button: true,
                      'button is-info': selectedGood === good,
                    })}
                  >
                    {selectedGood === good
                      ? '-'
                      : '+'}
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
