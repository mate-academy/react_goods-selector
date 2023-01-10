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

  handleClick = (item: string) => (
    this.state.selectedGood === item
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: item })
  );

  render() {
    const { selectedGood } = this.state;
    const isSelected = (selectedGood.length > 0);

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {isSelected
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          { (isSelected) && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              onClick={() => (
                this.setState({ selectedGood: '' })
              )}
              className="delete ml-3"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => {
              const itemcheck = selectedGood === item;

              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': itemcheck },
                  )}
                >
                  <td>
                    <button
                      data-cy={
                        (itemcheck)
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': itemcheck },
                      )}
                      onClick={() => {
                        this.handleClick(item);
                      }}
                    >
                      {itemcheck
                        ? '-'
                        : '+'}
                    </button>
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
