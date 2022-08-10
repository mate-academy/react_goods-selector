import classNames from 'classnames';
import React from 'react';
import './App.scss';
import Button from '@mui/material/Button';

import goodsFromServer from './goods';

type State = {
  goods: string[],
  selectedGood: string,
};

export class App extends React.Component<{}, State > {
  state: State = {
    goods: [...goodsFromServer],
    selectedGood: 'Jam',
  };

  resetSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render(): React.ReactNode {
    const { goods, selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { selectedGood
            // eslint-disable-next-line
              ? <span><span className="App__title--selected">{selectedGood}</span> is selected</span>
              : 'No goods selected'}
          </h1>

          {selectedGood
            && (
              <Button
                type="button"
                className="App__clear"
                onClick={this.resetSelectedGood}
                variant="outlined"
                color="error"
              >
                Clear
              </Button>
            )}
        </header>

        <ul className="list">
          {goods.map(good => (
            <li
              className={classNames('Good list__item', {
                'Good--active': selectedGood === good,
              })}
              key={good}
            >
              {good}

              {selectedGood === good
              && (
                <Button
                  type="button"
                  className="Good__remove"
                  onClick={() => {
                    this.selectGood('');
                  }}
                  variant="outlined"
                  color="secondary"
                >
                  Remove
                </Button>
              )}

              { selectedGood !== good
                && (
                  <Button
                    type="button"
                    className="Good__select"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                    variant="outlined"
                    color="success"
                  >
                    Select
                  </Button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
