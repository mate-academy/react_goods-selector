import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import goods from './api/goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeGood}
              />
            </h1>
          )
            : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;
              const addOrRemoveGood = isSelected
                ? (this.removeGood)
                : (() => this.addGood(good));

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames({
                    'has-background-success-light': selectedGood === good,
                  })}
                >
                  <td>
                    <button
                      data-cy={isSelected
                        ? ('RemoveButton')
                        : ('AddButton')}
                      type="button"
                      className={classNames(
                        'button',
                        {
                          'is-info': isSelected,
                        },
                      )}
                      onClick={addOrRemoveGood}
                    >
                      {isSelected
                        ? ('-')
                        : ('+')}
                    </button>
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
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
