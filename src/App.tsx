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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleGoodClick = (goodName: string) => {
    const isRepeatButton = this.state.selectedGood === goodName;

    if (isRepeatButton) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: goodName });
    }
  };

  handleClearButtonClick = () => {
    this.setState({ selectedGood: '' });
  };

  createMassivegoodItements = () => {
    return (
      goods.map((goodItem) => {
        const isGoodSelected = this.state.selectedGood === goodItem;

        return (
          <tr
            data-cy="Good"
            key={goodItem}
            className={
              classNames({ 'has-background-success-light': isGoodSelected })
            }
          >
            <td>
              <button
                data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                type="button"
                className={classNames('button', { 'is-info': isGoodSelected })}
                onClick={() => this.handleGoodClick(goodItem)}
              >
                {isGoodSelected ? '-' : '+'}
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {goodItem}
            </td>
          </tr>
        );
      })
    );
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood.length
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClearButtonClick}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {this.createMassivegoodItements()}
          </tbody>
        </table>
      </main>
    );
  }
}
