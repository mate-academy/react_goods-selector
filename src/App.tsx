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
    selectedStatus: true,
  };

  handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const goodTitle = (
      event?.currentTarget.parentElement?.nextElementSibling?.textContent);

    this.setState({ selectedGood: goodTitle });

    if (document.querySelector('.is-info') === event?.currentTarget) {
      this.setState({ selectedGood: '' });
    }
  };

  handleUnselect = () => {
    if (document.querySelector('.is-info')) {
      this.setState({ selectedGood: '' });
    }
  };

  render() {
    const { selectedGood, selectedStatus } = this.state;

    return (
      <main className="section container">
        {this.state.selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              { `${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleUnselect}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>

            {goods.map(
              item => {
                const checkIfSelected = () => (
                  selectedStatus === true && item === selectedGood
                );

                return (
                  <tr
                    data-cy="Good"
                    key={item}
                    className={checkIfSelected()
                      ? 'has-background-success-light'
                      : ''}
                  >
                    <td>
                      <button
                        data-cy={checkIfSelected()
                          ? 'RemoveButton'
                          : 'AddButton'}
                        type="button"
                        className={checkIfSelected()
                          ? 'button is-info'
                          : 'button'}
                        onClick={this.handleSelect}
                      >
                        {checkIfSelected()
                          ? '-'
                          : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {item}
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </main>
    );
  }
}
