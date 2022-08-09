import { Component } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addSelected(item:string) {
    this.setState({ selectedGood: item });
  }

  clearSelected() {
    this.setState({ selectedGood: '' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { !selectedGood
              ? 'No goods selected'
              : `${selectedGood} is selected`}
          </h1>
          {selectedGood
            && (
              <Button
                type="button"
                className="App__clear"
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.clearSelected();
                }}
              >
                Clear
              </Button>
            )}
        </header>

        <ul>
          {goodsFromServer.map(good => {
            const isSelected = selectedGood.includes(good);

            return (
              <li
                key={good}
                className={classNames('Good',
                  { 'Good--active': isSelected })}
              >
                {good}
                {!isSelected
                  ? (
                    <Button
                      type="button"
                      className="Good__select"
                      variant="contained"
                      color="success"
                      onClick={() => {
                        this.addSelected(good);
                      }}
                    >
                      Select
                    </Button>
                  )
                  : (
                    <Button
                      type="button"
                      className="Good__remove"
                      variant="contained"
                      color="error"
                      onClick={() => {
                        this.clearSelected();
                      }}
                    >
                      Remove
                    </Button>
                  )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
