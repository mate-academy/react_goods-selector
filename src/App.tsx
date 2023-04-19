import { Component } from 'react';
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
  selectedGood: string | null;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleSelect = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handleReset = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        { selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleReset}
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
                  key={good}
                  className={classNames(
                    {
                      'has-background-success-light': isSelected,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={{
                        AddButton: !isSelected,
                        RemoveButton: isSelected,
                      }}
                      type="button"
                      className={classNames('button', {
                        'is-info': isSelected,
                      })}
                      onClick={() => {
                        this.handleSelect(good);
                      }}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    { good }
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
