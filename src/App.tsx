import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  { name: 'Dumplings' },
  { name: 'Carrot' },
  { name: 'Eggs' },
  { name: 'Ice cream' },
  { name: 'Apple' },
  { name: 'Bread' },
  { name: 'Fish' },
  { name: 'Honey' },
  { name: 'Jam' },
  { name: 'Garlic' },
];

type State = {
  selectedGood: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    // eslint-disable-next-line react/no-unused-state
    selectedGood: '',
  };

  render(): React.ReactNode {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected'}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => this.setState({ selectedGood: '' })}
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map((item) => (
              <tr
                data-cy="Good"
                key={item.name}
                className={`${
                  item.name === this.state.selectedGood
                    ? 'has-background-success-light'
                    : ''
                }`}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${
                      item.name === this.state.selectedGood ? 'is-info' : ''
                    }`}
                    onClick={() => {
                      if (this.state.selectedGood === item.name) {
                        this.setState({ selectedGood: '' });
                      } else {
                        this.setState({ selectedGood: item.name });
                      }
                    }}
                  >
                    {item.name === this.state.selectedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
