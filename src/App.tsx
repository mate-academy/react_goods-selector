import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGoodsButton = (name: string, item = '') => (
    <button
      data-cy={name}
      type="button"
      className={name === 'AddButton' ? 'button' : 'button is-info'}
      onClick={() => this.setState(
        { selectedGood: item },
      )}
    >
      {name === 'RemoveButton' ? '-' : '+'}
    </button>
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className="
            title is-flex
            is-align-items-center
          "
        >
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            <button
              aria-label="ClearButton"
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState(
                { selectedGood: '' },
              )}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                key={item}
                data-cy="Good"
                className={classNames('', {
                  'has-background-success-light': (selectedGood === item),
                })}
              >
                <td>
                  {selectedGood === item
                    ? this.addGoodsButton('RemoveButton')
                    : this.addGoodsButton('AddButton', item)}
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
