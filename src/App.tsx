import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Button } from '@mui/material';
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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handelClickRemove = () => {
    this.setState({ selectedGood: '' });
  };

  handelClickADD = (good: string) => {
    this.setState({ selectedGood: good });
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
                onClick={this.handelClickRemove}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light':
                  selectedGood === good,
                })}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <Button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handelClickRemove}
                        variant="contained"
                        color="success"
                      >
                        -
                      </Button>
                    )
                    : (
                      <Button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handelClickADD(good)}
                        variant="outlined"
                      >
                        +
                      </Button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
