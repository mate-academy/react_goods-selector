import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';

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
  selected: string;
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    selected: 'Jam',
  };

  handleClick = () => this.setState({ selected: '' });

  handleSelect = (good: string, goodIsSelected: boolean) => (
    goodIsSelected
      ? this.setState({ selected: '' })
      : this.setState({ selected: good })
  );

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">

        {
          selected.length === 0
            ? <h1 className="title">No goods selected</h1>
            : (
              <h1 className="title is-flex is-align-items-center">
                {`${selected} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClick}
                />
              </h1>
            )
        }

        <table className="table">
          <tbody>
            {goods.map(good => {
              const goodIsSelected = good === selected;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': goodIsSelected },
                  )}
                >
                  <td>
                    <button
                      data-cy={
                        goodIsSelected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={classNames(
                        'button',
                        {
                          'is-info': goodIsSelected,
                        },
                      )}
                      onClick={() => this.handleSelect(good, goodIsSelected)}
                    >
                      {
                        goodIsSelected
                          ? '-'
                          : '+'
                      }
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
