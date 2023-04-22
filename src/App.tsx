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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleGoodSelection = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  removeSelectedGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  createGoodButton = (isSelected: boolean, good: string) => {
    return (
      <button
        data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
        type="button"
        className={
          classNames('button', {
            'is-info': isSelected,
          })
        }
        onClick={
          isSelected
            ? this.removeSelectedGood
            : () => this.handleGoodSelection(good)
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
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeSelectedGood}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={
                    classNames('', {
                      'has-background-success-light': isSelected,
                    })
                  }
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
