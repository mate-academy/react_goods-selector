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
interface State {
  selectedGood: string,
}

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  goods: string[],
}

export class App extends React.Component<Props, State> {
  props = { goods };

  state: State = {
    selectedGood: 'Jam',
  };

  dismissSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  chooseSelectedGood = (newGood: string) => {
    this.setState({ selectedGood: newGood });
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
                onClick={this.dismissSelectedGood}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.dismissSelectedGood}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.chooseSelectedGood(good);
                          }}
                        >
                          +
                        </button>
                      )}
                    {/* <button
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'is-info': isSelected,
                      })}
                      onClick={isSelected
                        ? this.dismissSelectedGood
                        : () => {
                          this.chooseSelectedGood(good);
                        }}
                    >
                      {isSelected ? '-' : '+'}
                    </button> */}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {`${good}`}
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
