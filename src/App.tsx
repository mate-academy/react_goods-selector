import React from 'react';
import 'bulma/css/bulma.css';
import ClassNames from 'classnames';
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
  isChecked: boolean;
  selectedGood: string;
};

export class App extends React.Component <{}, State> {
  state = {
    isChecked: true,
    selectedGood: 'Jam',
  };

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      isChecked: true,
      selectedGood: e.currentTarget.parentElement?.nextElementSibling?.textContent || '', //eslint-disable-line
    });
  };

  clearButton = () => (
    this.setState({
      isChecked: false,
      selectedGood: '',
    }));

  render() {
    const { isChecked, selectedGood } = this.state;

    return (
      <main className="section container">
        {isChecked
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearButton}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>

            {goods.map((item: string) => {
              const isItemSelected = item === selectedGood;

              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={isItemSelected
                    ? 'has-background-success-light' : ''}
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className={ClassNames(
                        'button', { 'is-info': isItemSelected },
                      )}
                      onClick={this.handleClick}
                    >
                      {isItemSelected ? '-' : '+'}
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
