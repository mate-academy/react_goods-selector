import React, { Component } from 'react';
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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectItem = (item: string) => {
    const condition = item === this.state.selectedGood;
    const valueToSet = condition ? '' : item;

    this.setState({ selectedGood: valueToSet });
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

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => this.setState({ selectedGood: '' })}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>

        }

        <table className="table">
          <tbody>
            {
              goods.map(item => {
                const isSelected = item === selectedGood;
                const classesForTr = classNames(
                  { 'has-background-success-light': isSelected },
                );
                const classesForButton = classNames({
                  button: true,
                  'is-info': isSelected,
                });

                return (
                  <tr key={item} data-cy="Good" className={classesForTr}>
                    <td>
                      <button
                        data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                        type="button"
                        className={classesForButton}
                        onClick={() => this.selectItem(item)}
                      >
                        {isSelected ? '-' : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {item}
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

export const App2: React.FC = () => (
  <main className="section container">
    <h1 className="title">No goods selected</h1>

    <h1 className="title is-flex is-align-items-center">
      Jam is selected

      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
      />
    </h1>

    <table className="table">
      <tbody>
        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr>
      </tbody>
    </table>
  </main>
);
