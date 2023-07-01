import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';

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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleButtonClick = (clickedGood: string) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: selectedGood !== clickedGood ? clickedGood : '',
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
              onClick={() => this.setState({ selectedGood: '' })}
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
              const trClassName = classnames({
                'has-background-success-light': isSelected,
              });
              const buttonClassName = classnames('button', {
                'is-info': isSelected,
              });

              return (
                <tr key={good} data-cy="Good" className={trClassName}>
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={buttonClassName}
                      onClick={() => this.handleButtonClick(good)}
                    >
                      {isSelected ? '-' : '+'}
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
