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

  onClickHandler = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearButtonHandler = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">

          {
            (selectedGood === '')
              ? 'No goods selected'
              : `${selectedGood} is selected`
          }

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearButtonHandler}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const selected = good === this.state.selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': selected,
                  })}
                  key={good}
                >
                  <td>
                    <button
                      data-cy={
                        selected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={`button ${selected ? 'is-info' : ''}`}
                      onClick={
                        selected
                          ? this.clearButtonHandler
                          : () => this.onClickHandler(good)
                      }
                    >
                      {selected
                        ? '-'
                        : '+'}
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
