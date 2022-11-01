import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

import classNames from 'classnames';

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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearElement = () => {
    this.setState({ selectedGood: '' });
  };

  isSelected = (item: string) => (
    this.state.selectedGood === item
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                aria-label="ClearButton"
                onClick={this.clearElement}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={
                  classNames(
                    '',
                    { 'has-background-success-light': this.isSelected(item) },
                  )
                }
              >
                <td>
                  <button
                    data-cy={
                      this.isSelected(item)
                        ? ('RemoveButton')
                        : ('AddButton')
                    }
                    type="button"
                    className={

                      classNames(
                        'button',
                        { 'is-info': this.isSelected(item) },
                      )
                    }
                    onClick={() => {
                      this.setState({ selectedGood: item });
                      if (this.isSelected(item)) {
                        this.clearElement();
                      }
                    }}
                  >
                    {this.isSelected(item)
                      ? ('-')
                      : ('+')}
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
