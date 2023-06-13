import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

export class App extends React.Component<{}, {}> {
  state = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectButton = (item: string) => {
    const { selectedGood } = this.state;
    const isSelected = selectedGood === item;

    // this.setState({
    //   selectedGood: isSelected
    //     ? item
    //     : '',
    // });
    if (!isSelected) {
      this.setState({ selectedGood: item });
    } else {
      this.setState({ selectedGood: '' });
    }
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
                onClick={this.clearGood}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={cn({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={cn('button', {
                        'is-info': isSelected,
                      })}
                      onClick={() => this.selectButton(good)}
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
