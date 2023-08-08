/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-return-assign */
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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  reset = () => {
    goods.forEach(good => {
      const element:HTMLElement | null = document.getElementById(`${good}`);

      if (element) {
        element.classList.remove('has-background-success-light');
        const button:HTMLElement | null = element.querySelector('.button');

        if (button && button.classList.contains('is-info')) {
          button.classList.remove('is-info');
          button.setAttribute('data-cy', 'AddButton');
          button.textContent = '+';
        }
      }
    });

    this.setState({ selectedGood: null });
  };

  handleClick = (good: string) => {
    const element:HTMLElement | null = document.getElementById(`${good}`);

    if (element) {
      if (element.classList.contains('has-background-success-light')) {
        this.reset();
      } else {
        this.reset();

        if (element) {
          element.classList.add('has-background-success-light');
          const button:HTMLElement | null = element.querySelector('.button');

          if (button) {
            goods.forEach(good => {
              const overButton:HTMLElement | null = document.getElementById(`${good}`);

              if (overButton) {
                const otherButton:HTMLElement | null
                = overButton.querySelector('.button');

                if (otherButton) {
                  otherButton.classList.remove('is-info');
                  otherButton.setAttribute('data-cy', 'AddButton');
                  otherButton.textContent = '+';
                }
              }
            });

            button.setAttribute('data-cy', 'RemoveButton');
            button.classList.add('is-info');
            button.textContent = '-';
          }
        }

        this.setState({ selectedGood: good });
      }
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood}
            {' '}
            is selected

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.reset}
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
                data-cy="Good"
                id={good}
                key={good}
                className={good === 'Jam'
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={good === 'Jam' ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={good === 'Jam' ? 'button is-info' : 'button'}
                    onClick={() => this.handleClick(good)}
                  >
                    {good === 'Jam' ? '-' : '+'}
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
