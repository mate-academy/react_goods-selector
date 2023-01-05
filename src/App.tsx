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
    selectedGood: 'Jam is selected',
  };

  handleClickAdd = (item: string) => (
    this.state.selectedGood === `${item} is selected`
      ? this.setState({ selectedGood: 'No goods selected' })
      : this.setState({ selectedGood: `${item} is selected` })
  );

  render() {
    const { selectedGood } = this.state;
    const checkItemIsSelected = (selectedGood !== 'No goods selected');

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood}`}

          { (checkItemIsSelected) && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              onClick={() => (
                this.setState({ selectedGood: 'No goods selected' })
              )}
              className="delete ml-3"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => {
              const itemcheck = selectedGood === `${item} is selected`;

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
                        this.handleClickAdd(`${item}`);
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
