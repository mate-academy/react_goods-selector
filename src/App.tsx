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
  selectedGood: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  hiddenGoods = (good: string) => {
    this.setState({ selectedGood: good });
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
                onClick={() => this.hiddenGoods('')}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <>
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': selectedGood === item,
                  })}
                >
                  <td>
                    <button
                      data-cy={
                        selectedGood === item
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        classNames(
                          'button',
                          { 'is-info': selectedGood === item },
                        )
                      }
                      onClick={() => this.hiddenGoods(
                        selectedGood === item
                          ? ''
                          : item,
                      )}
                    >
                      {selectedGood === item ? '-' : '+'}
                    </button>
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
                    {item}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

/* <tbody>
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
</tbody> */
