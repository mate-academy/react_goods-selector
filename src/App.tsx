import { Component } from 'react';
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

function removeButtonCreate(button: HTMLButtonElement) {
  button.parentNode?.parentElement?.classList
    .add('has-background-success-light');
  button.setAttribute('data-cy', 'RemoveButton');
  button.classList.add('is-info');
  // eslint-disable-next-line no-param-reassign
  button.innerText = '-';
}

function addButtonCreate(button: HTMLButtonElement) {
  button.parentNode?.parentElement?.classList
    .remove('has-background-success-light');
  button.setAttribute('data-cy', 'AddButton');
  button.classList.remove('is-info');
  // eslint-disable-next-line no-param-reassign
  button.innerText = '+';
}

function changeAllButtonsToAddButtons() {
  Array.from(document
    .getElementsByTagName('button'))
    .map(arrayButton => arrayButton.dataset.cy !== 'ClearButton'
      && addButtonCreate(arrayButton));
}

export class App extends Component<{}, {}> {
  state = {
    SelectedGood: '',
  };

  componentDidMount() {
    document.getElementsByTagName('button')[8].click();
  }

  render() {
    const { SelectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {SelectedGood
            ? (
              <>
                {`${SelectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState({ SelectedGood: '' });

                    changeAllButtonsToAddButtons();
                  }}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr data-cy="Good" data-good={good} key={good}>
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={(e) => {
                        const button = e.currentTarget;

                        if (button.dataset.cy === 'AddButton') {
                          changeAllButtonsToAddButtons();
                          removeButtonCreate(button);
                          this.setState(
                            {
                              SelectedGood: button
                                .parentNode?.parentElement?.dataset.good,
                            },
                          );

                          return;
                        }

                        addButtonCreate(button);
                        this.setState(
                          {
                            SelectedGood: '',
                          },
                        );
                      }}
                    >
                      +
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
