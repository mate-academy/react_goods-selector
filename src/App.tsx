import { Component } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

import { Button } from './components/Button';

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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  deleteGood = () => {
    this.selectGood('');
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
              <Button
                type="ClearButton"
                className="delete ml-3"
                onClick={this.deleteGood}
              />
            </h1>
          ) : (<h1 className="title">No goods selected</h1>)
        }

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >

                  {
                    isSelected ? (
                      <td>
                        <Button
                          type="RemoveButton"
                          className="button is-info"
                          onClick={this.deleteGood}
                          name="-"
                        />
                      </td>
                    ) : (
                      <td>
                        <Button
                          type="AddButton"
                          className="button"
                          onClick={() => this.selectGood(good)}
                          name="+"
                        />
                      </td>
                    )
                  }

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
