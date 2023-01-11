import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

type State = {
  selectedGood: string,
};

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

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleReset = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelect = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                <button
                  aria-label="Reset"
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  title="reset"
                  onClick={this.handleReset}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={
                    cn({
                      'has-background-success-light': isSelected,
                    })
                  }
                >
                  <td>
                    <button
                      data-cy={
                        cn({ AddButton: !isSelected },
                          { RemoveButton: isSelected })
                      }
                      type="button"
                      className={
                        cn('button', { 'is-info': isSelected })
                      }
                      onClick={() => {
                        return isSelected
                          ? this.handleReset()
                          : this.handleSelect(good);
                      }}
                    >
                      {
                        isSelected
                          ? '-'
                          : '+'
                      }
                    </button>
                  </td>

                  <td className="is-vcentered" data-cy="GoodTitle">
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
