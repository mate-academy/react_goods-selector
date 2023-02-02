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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearHandle = () => {
    this.setState({ selectedGood: '' });
  };

  selectHandle = (selectedGood: string) => {
    if (selectedGood === this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearHandle}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={
                  classNames(
                    {
                      'has-background-success-light': good === selectedGood,
                    },
                  )
                }
              >
                <td>
                  <button
                    data-cy={
                      classNames(
                        {
                          RemoveButton: good === selectedGood,
                          AddButton: good !== selectedGood,
                        },
                      )
                    }
                    type="button"
                    className={
                      classNames(
                        'button',
                        { 'is-info': good === selectedGood },
                      )
                    }
                    onClick={() => {
                      this.selectHandle(good);
                    }}
                  >
                    {selectedGood === good ? '-' : '+'}
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
