/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  click = (event: React.MouseEvent<HTMLButtonElement>, good: string) => {
    const trArray = Array.from(document.querySelectorAll('tr'));

    trArray.forEach((tr) => {
      tr.classList.remove('has-background-success-light');
    });

    if (event.currentTarget.dataset.cy === 'RemoveButton') {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: good });

      event.currentTarget.closest('tr')?.classList
        .add('has-background-success-light');
    }
  };

  handlerClearButton = () => {
    this.setState({ selectedGood: '' });

    const trArray = Array.from(document.querySelectorAll('tr'));

    trArray.forEach((tr) => {
      tr.classList.remove('has-background-success-light');
    });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handlerClearButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    good === 'Jam' && 'has-background-success-light',
                  )}
                >
                  <td>
                    {good === selectedGood
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={(event) => {
                            this.click(event, good);
                          }}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={(event) => {
                            this.click(event, good);
                          }}
                        >
                          +
                        </button>
                      )}
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
