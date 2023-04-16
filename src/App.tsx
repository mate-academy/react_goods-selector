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
  state: State = {
    selectedGood: 'Jam',
  };

  handleClick(item: string) {
    this.setState(prevState => ({
      selectedGood: item === prevState.selectedGood ? '' : item,
    }));
  }

  handleCrossButton(): void {
    this.setState({
      selectedGood: '',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.handleCrossButton()}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((item) => (
              <tr
                data-cy="Good"
                className={
                  item === selectedGood ? 'has-background-success-light' : ''
                }
                key={item}
              >
                <td>
                  <button
                    data-cy={
                      item === selectedGood ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={
                      item === selectedGood ? 'button is-info' : 'button'
                    }
                    onClick={() => this.handleClick(item)}
                  >
                    {item === selectedGood ? '-' : '+'}
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
