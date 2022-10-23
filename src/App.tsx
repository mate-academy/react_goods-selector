/* eslint-disable max-len */
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
  selectedGood: string,
  titleText: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    titleText: 'Jam is selected',
  };

  resetTitle = () => {
    this.setState({ titleText: 'No goods selected' });
    this.setState({ selectedGood: '' });
  };

  // event: React.MouseEvent<HTMLButtonElement>,
  adder = (good: string) => {
    this.setState({ titleText: `${good} is selected` });
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;
    const notChecked = selectedGood !== '';

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.titleText}

          {notChecked && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              id="delete"
              onClick={this.resetTitle}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const checked = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': checked },
                  )}
                >
                  <td>
                    <button
                      data-cy={checked ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'is-info': checked,
                      })}
                      onClick={() => {
                        return checked
                          ? this.resetTitle()
                          : this.adder(good);
                      }}
                    >
                      {checked
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
