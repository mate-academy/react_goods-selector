import { Button, List, ListItem } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleSelectClear = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood && (
            <Button
              variant="outlined"
              sx={{ color: '#6A718F' }}
              type="button"
              className="App__clear"
              onClick={this.handleSelectClear}
            >
              Clear
            </Button>
          )}
        </header>

        <List
          className="block"
          component="nav"
          aria-label="mailbox folders"
        >
          {goodsFromServer.map(good => {
            const isSelectedGood = good === selectedGood;

            return (
              <ListItem
                key={good}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                className={cn('Good', {
                  'Good--active': isSelectedGood,
                })}
              >
                {good}
                {isSelectedGood && (
                  <Button
                    variant="outlined"
                    sx={{ width: 90, color: '#6A718F' }}
                    type="button"
                    className="button Good__remove"
                    onClick={this.handleSelectClear}
                  >
                    Remove
                  </Button>
                )}
                {isSelectedGood || (
                  <Button
                    variant="outlined"
                    sx={{ width: 90, color: '#6A718F' }}
                    type="button"
                    className="button Good__select"
                    onClick={() => this.handleSelectGood(good)}
                  >
                    Select
                  </Button>
                )}
              </ListItem>
            );
          })}
        </List>
      </main>
    );
  }
}
