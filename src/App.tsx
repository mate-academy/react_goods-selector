/* eslint-disable no-param-reassign */
import React from 'react';
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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const goodLength = selectedGood.length;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          { (goodLength > 0)
            ? (
              `${selectedGood} is selected`
            )
            : 'No goods selected' }

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={(e) => {
              this.setState({ selectedGood: '' });
              e.currentTarget.remove();
            }}
          />
        </h1>

        <table className="table">
          <tbody>
            { goods.map(el => {
              const isSelected = selectedGood === el;

              return (
                <tr
                  data-cy="Good"
                  key={el}
                  className={isSelected
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={isSelected ? 'button is-info' : 'button'}
                      style={{ display: 'flex' }}
                      onClick={() => {
                        this.setState({
                          selectedGood: (isSelected) ? '' : el,
                        });

                        const clearButton
                        = document.querySelector('.ml-3');
                        const title = document.querySelector('.title');

                        if (isSelected && clearButton) {
                          clearButton.remove();
                        }

                        if (!isSelected && !clearButton) {
                          const newClearButton
                          = document.createElement('button');

                          newClearButton.className = 'delete ml-3';
                          newClearButton.style.display = 'flex';
                          title?.append(newClearButton);
                        }
                      }}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered" id={el}>
                    {el}
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
