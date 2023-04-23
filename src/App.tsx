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

interface S {
  selectedGood: string;
}

export class App extends React.Component<{}, S> {
  state = {
    selectedGood: 'Jam',
  };

  handleGoodButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    good: string,
  ) => {
    const button = event.currentTarget;

    if (button.dataset.cy === 'AddButton') {
      this.setState({ selectedGood: good });
    } else {
      this.setState({ selectedGood: '' });
    }
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood ? `${selectedGood} is` : 'No goods'} selected` }
          {selectedGood
            && (
              <>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClearButton}
                />
              </>
            )}
        </h1>
        <table className="table">
          <tbody>
            {
              goods.map(good => {
                const isSelected = good === selectedGood;

                return (
                  <tr
                    data-cy="Good"
                    key={good}
                    className={classNames({
                      'has-background-success-light': isSelected,
                    })}
                  >
                    <td>
                      <button
                        data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                        type="button"
                        className={classNames('button',
                          {
                            'is-info': isSelected,
                          })}
                        onClick={(event) => {
                          this.handleGoodButton(event, good);
                        }}
                      >
                        {isSelected ? '-' : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
