import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { flowRight } from 'cypress/types/lodash';
// import { log } from 'console';

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
  selectedValue: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedValue: 'Jam',
  };

  clearValue = () => {
    this.setState({ selectedValue: '' });

    document.querySelectorAll('tr').forEach(el => {
      el.classList.remove('has-background-success-light');

      const button = el.querySelector('button');

      if (button) {
        button.innerText = '+';
        button.classList.remove('is-info');
        button.dataset.cy = 'AddButton';
      }
    });
  };

  selectValue = (currentTarget: HTMLButtonElement, value: string) => {
    if (currentTarget.dataset.cy === 'AddButton') {
      this.clearValue();

      const target = currentTarget;
      const row = target.closest('tr');

      target.innerHTML = '-';
      target.classList.add('is-info');

      if (row) {
        row.classList.toggle(
          'has-background-success-light',
        );
      }

      target.dataset.cy = 'RemoveButton';
      this.setState({ selectedValue: value });
    } else {
      this.clearValue();
    }
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedValue
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedValue} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearValue}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={(event) => {
                      this.selectValue(event.currentTarget, item);
                    }}
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </main>
    );
  }
}
