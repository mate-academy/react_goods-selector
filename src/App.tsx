import React, { Component } from 'react';
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
  selectedGoods: string,
};

function removeClass(
  collection: NodeListOf<HTMLButtonElement | HTMLTableRowElement>,
  className: string,
) {
  collection.forEach(element => {
    element.classList.remove(className);
  });
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: 'Jam',
  };

  unsetCells = () => {
    const cells = document.querySelectorAll('tr');
    const buttons = document.querySelectorAll('button');

    buttons.forEach((b: HTMLButtonElement) => {
      // eslint-disable-next-line no-param-reassign
      b.innerText = '+';
    });

    removeClass(buttons, 'is-info');
    removeClass(cells, 'has-background-success-light');
  };

  setCell = (event: React.SyntheticEvent) => {
    const button = event.currentTarget as HTMLElement;
    const cell = button.parentElement?.parentElement;

    cell?.classList.add('has-background-success-light');
    button.classList.add('is-info');
    button.innerText = '-';
  };

  toggleCell(event: React.SyntheticEvent) {
    const currentGood
      = event.currentTarget.parentElement?.nextSibling as HTMLElement;

    if (this.state.selectedGoods === currentGood.innerText) {
      this.unsetCells();
      this.setState({ selectedGoods: '' });
    } else {
      this.unsetCells();
      this.setState({ selectedGoods: currentGood?.innerText || '' });
      this.setCell(event);
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {selectedGoods
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGoods} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.unsetCells();
                  this.setState({ selectedGoods: '' });
                }}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr key={good} data-cy="Good">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={(event) => {
                      this.toggleCell(event);
                    }}
                  >
                    +
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
