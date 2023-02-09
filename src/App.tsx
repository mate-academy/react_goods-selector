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

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: goods[8],
  };

  componentDidMount() {
    const selectedGoodRow = document.querySelector('tbody')?.children[8];

    if (selectedGoodRow) {
      selectedGoodRow.classList.add('has-background-success-light');
      const button = selectedGoodRow.children[0]?.children[0];

      if (button) {
        (button as HTMLElement).dataset.cy = 'RemoveButton';
        button.classList.add('is-info');
        button.textContent = '-';
      }
    }
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    const prevGood = prevState.selectedGood;
    const prevSelectedGoodRow
    = document.querySelector('tbody')?.children[goods.indexOf(prevGood)];

    if (prevSelectedGoodRow) {
      prevSelectedGoodRow?.classList.remove('has-background-success-light');
      const button = prevSelectedGoodRow.children[0]?.children[0];

      if (button) {
        (button as HTMLElement).dataset.cy = 'AddButton';
        button.classList.remove('is-info');
        button.textContent = '+';
      }
    }
  }

  clearHandler = () => {
    this.setState({ selectedGood: '' });
  };

  buttonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    good: string,
  ) => {
    const button = e.currentTarget;

    if (button.dataset.cy === 'RemoveButton') {
      const selectedRow = e.currentTarget.parentElement?.parentElement;

      if (selectedRow) {
        selectedRow.classList.remove('has-background-success-light');
      }

      button.dataset.cy = 'AddButton';
      button.classList.remove('is-info');
      button.textContent = '+';
      this.setState({ selectedGood: '' });
    } else if (button.dataset.cy === 'AddButton') {
      const selectedRow = e.currentTarget.parentElement?.parentElement;

      if (selectedRow) {
        selectedRow.classList.add('has-background-success-light');
      }

      button.dataset.cy = 'RemoveButton';
      button.classList.add('is-info');
      button.textContent = '-';
      this.setState({ selectedGood: good });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood && <h1 className="title">No goods selected</h1>}

        {selectedGood && (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            {selectedGood && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearHandler}
                aria-label="Clear selection"
              />
            )}
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr data-cy="Good" key={good}>
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={(e) => {
                      this.buttonClickHandler(e, good);
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
