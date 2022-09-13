import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  setGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  selectFunction = (isSelected: boolean, good: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isSelected
      ? this.clearGood()
      : this.setGood(good);
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearGood}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={isSelected
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      onClick={() => {
                        this.selectFunction(isSelected, good);
                      }}
                      data-cy={`${isSelected ? 'RemoveButton' : 'AddButton'}`}
                      type="button"
                      className={classNames('button', {
                        'is-info': isSelected,
                      })}
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
