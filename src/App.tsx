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

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClickOnGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClickOnClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  // Below is alternative Goods Button implementation

  // button = (isSelected: boolean, good: string) => {
  //   if (isSelected) {
  //     return (
  //       <button
  //         data-cy="RemoveButton"
  //         type="button"
  //         className="button is-info"
  //         onClick={this.handleClickOnClearButton}
  //       >
  //         -
  //       </button>
  //     );
  //   }

  //   return (
  //     <button
  //       data-cy="AddButton"
  //       type="button"
  //       className="button"
  //       onClick={() => this.handleClickOnGood(good)}
  //     >
  //       +
  //     </button>
  //   );
  // };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'
          }

          {selectedGood && (
            // eslint-disable-next-line
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClickOnClearButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={
                    isSelected
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    {/* Below is alternative Goods Button implementation */}

                    {/* {this.button(isSelected, good)} */}
                    <button
                      data-cy={
                        isSelected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={`button ${isSelected ? 'is-info' : ''}`}
                      onClick={
                        isSelected
                          ? this.handleClickOnClearButton
                          : () => this.handleClickOnGood(good)
                      }
                    >
                      {isSelected ? '-' : '+'}
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
