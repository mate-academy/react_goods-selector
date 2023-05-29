import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

const goods = [
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
  selectedGood: string | undefined;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { selectedGood } = this.state;
    const clickedGood = event.currentTarget.dataset.good;

    if (selectedGood === clickedGood) {
      this.setState({ selectedGood: undefined });
    } else {
      this.setState({ selectedGood: clickedGood });
    }
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
              onClick={() => this.setState({ selectedGood: undefined })}
            >
              <span className="visually-hidden">Clear selected good</span>
            </button>
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-good={good}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={this.handleButtonClick}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}

            <tr data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Garlic
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}
