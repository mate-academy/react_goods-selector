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

  handleButtonClick = (clickedGood: string) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: selectedGood !== clickedGood
        ? clickedGood : undefined,
    });
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
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => this.handleButtonClick(good)}
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
