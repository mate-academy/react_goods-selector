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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  setSelect = (item = '') => {
    this.setState({
      selectedGood: item,
    });
  };

  handleSwitch = (item: string, itemValue: string) => {
    if (item.includes('is-info')) {
      this.setSelect();
    } else {
      this.setSelect(itemValue);
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setSelect()}
              />
            </h1>
          ) : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const selected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    classNames(
                      {
                        'has-background-success-light':
                        selected,
                      },
                    )
                  }
                >
                  <td>
                    <button
                      data-cy={
                        selected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        classNames(
                          'button',
                          { 'is-info': selected },
                        )
                      }
                      onClick={(event) => {
                        this.handleSwitch(event.currentTarget.className, good);
                      }}
                    >
                      {selected ? '-' : '+'}
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
