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
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    item === this.state.selectedGood
      ? this.setState({
        selectedGood: '',
      })
      : this.setState({
        selectedGood: item,
      });
  }

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${this.state.selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState({
                selectedGood: '',
              })}
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
                  item === this.state.selectedGood
                    ? 'has-background-success-light'
                    : ''
                }
                key={item}
              >
                <td>
                  <button
                    data-cy={
                      item === this.state.selectedGood
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      item === this.state.selectedGood
                        ? 'button is-info'
                        : 'button'
                    }
                    onClick={() => this.handleClick(item)}
                  >
                    {item === this.state.selectedGood ? '-' : '+'}
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
