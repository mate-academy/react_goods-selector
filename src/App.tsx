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
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  handleButtonClick = (clickedGood: string) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: selectedGood !== clickedGood ? clickedGood : undefined,
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
            {goods.map((good) => {
              const isSelected = selectedGood === good;
              const buttonClassName = `button ${
                isSelected ? 'has-background-success-light' : ''
              }`;
              const minusStyle = isSelected ? { color: 'white' } : {};

              return (
                <tr key={good} data-cy="Good">
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={`${buttonClassName}`}
                      onClick={() => this.handleButtonClick(good)}
                      style={minusStyle}
                    >
                      {isSelected ? <span style={minusStyle}>-</span> : '+'}
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
