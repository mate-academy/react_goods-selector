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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  changeGood = (item: string) => {
    this.setState({ selectedGood: item });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood: selected } = this.state;
    const { changeGood, removeGood } = this;

    return (
      <main className="section container">
        {selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selected} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={removeGood}
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
            {goods.map(item => {
              const isEqual = item === selected;

              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={classNames(
                    {
                      'has-background-success-light': isEqual,
                    },
                  )}
                >
                  <td>
                    {isEqual
                      ? (
                        <button
                          onClick={removeGood}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          onClick={() => changeGood(item)}
                          data-cy="AddButton"
                          type="button"
                          className="button"
                        >
                          +
                        </button>
                      )}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
