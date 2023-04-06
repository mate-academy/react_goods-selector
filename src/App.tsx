/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { event } from 'cypress/types/jquery';

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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  componentDidUpdate({}, prevState: State) {
    if (prevState.selectedGood === this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    }
  }

  defineSelectedButton = (good: string) => {
    let dataCy = 'AddButton';
    let buttonClassName = 'button';
    let buttonMark = '+';

    if (good === this.state.selectedGood) {
      dataCy = 'RemoveButton';
      buttonClassName = 'button is-info';
      buttonMark = '-';
    }

    return (
      <button
        data-cy={dataCy}
        type="button"
        className={buttonClassName}
        onClick={() => {
          this.setState({ selectedGood: good });
        }}
      >
        {buttonMark}
      </button>
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood ? (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood} is selected

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )
            : <h1 className="title">No goods selected</h1>
        }

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
                  {this.defineSelectedButton(good)}
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
