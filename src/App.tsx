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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'
          }

          {this.state.selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const active = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={
                    classNames({ 'has-background-success-light': active })
                  }
                >
                  <td>
                    <button
                      data-cy={
                        active
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        classNames(
                          'button',
                          { 'is-info': active },
                        )
                      }
                      onClick={() => {
                        if (active) {
                          this.setState({ selectedGood: '' });
                        } else {
                          this.setState({ selectedGood: good });
                        }
                      }}
                    >
                      {active ? '-' : '+'}
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
