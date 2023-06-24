import { Component } from 'react';
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

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
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
        {selectedGood !== ''
          ? (
            <h1 className="title is-flex is-align-items-center">
              { selectedGood }
              {' '}
              is selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeGood}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map(good => {
              const hasGood = selectedGood === good;

              return (
                hasGood ? (
                  <tr
                    className={classNames('',
                      'has-background-success-light')}
                    key={good}
                    data-cy="Good"
                  >
                    {' '}
                    <td>
                      <button
                        data-cy={classNames('',
                          'RemoveButton')}
                        type="button"
                        className={classNames('button',
                          'is-info')}
                        onClick={this.removeGood}
                      >
                        -
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                ) : (
                  <tr
                    key={good}
                    data-cy="Good"
                  >
                    <td>
                      <button
                        data-cy={classNames('',
                          'AddButton')}
                        type="button"
                        className="button"
                        onClick={() => this.addGood(good)}
                      >
                        +
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
