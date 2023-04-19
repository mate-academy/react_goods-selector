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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleButtonClick = (good?: string) => {
    this.setState({
      selectedGood: good || '',
    });
  };

  createGoodsHeader = (selectedGood: string) => {
    return selectedGood
      ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => this.handleButtonClick()}
          />
        </h1>
      )
      : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      );
  };

  createGoodButton = (isSelected: boolean, good: string) => {
    return (
      <button
        data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
        type="button"
        className={isSelected ? 'button is-info' : 'button'}
        onClick={
          isSelected
            ? () => this.handleButtonClick()
            : () => this.handleButtonClick(good)
        }
      >
        {isSelected ? '-' : '+'}
      </button>
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {this.createGoodsHeader(selectedGood)}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={isSelected ? 'has-background-success-light' : ''}
                  key={(new Date().getTime()) * Math.random()}
                >
                  <td>
                    {this.createGoodButton(isSelected, good)}
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
