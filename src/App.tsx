import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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

  cancelSelect = () => {
    this.setState({
      selectedGood: '',
    });
  };

  addSelected = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex': selectedGood },
          { 'is-align-items-center': selectedGood },
        )}
        >
          {!selectedGood
            ? 'No goods selected'
            : (
              <>
                {`${selectedGood} is selected`}
                <button
                  data-cy="ClearButton"
                  type="button"
                  aria-label="Clear"
                  className="delete ml-3"
                  onClick={this.cancelSelect}
                />
              </>
            )}
        </h1>
        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={uuidv4()}
                  className={classNames({
                    'has-background-success-light':
                      selectedGood === good,
                  })}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={
                        classNames('button', {
                          'is-info': isSelected,
                        })
                      }
                      onClick={isSelected
                        ? () => this.cancelSelect()
                        : () => this.addSelected(good)}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
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
