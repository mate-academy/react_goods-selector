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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const clickHandler = () => {
      this.setState({
        selectedGood: '',
      });
    };

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          <button
            aria-label="Clear"
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clickHandler}
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const handleClick = () => {
                if (selectedGood === good) {
                  this.setState({
                    selectedGood: '',
                  });
                } else {
                  this.setState({
                    selectedGood: good,
                  });
                }
              };

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    (selectedGood === good)
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className={selectedGood === good
                        ? 'button is-info'
                        : 'button'}
                      onClick={handleClick}
                    >
                      {selectedGood === good ? '-' : '+'}
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
