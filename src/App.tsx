import { Component, ReactNode } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import goodsFromServer from './goods';

interface State {
  selectedGood: string,
}

export class App extends Component {
  state: State = {
    selectedGood: 'Jam',
  };

  chooseGood = (name: string) => {
    this.setState({
      selectedGood: name,
    });
  };

  removeGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render(): ReactNode {
    const { selectedGood } = this.state;

    return (
      <>

        <main className="App">
          <div className="container">
            <header className="App__header">
              <h1 className="App__title">
                {
                  selectedGood.length
                    ? `${selectedGood} is selected`
                    : 'No goods selected'
                }
              </h1>

              { selectedGood && (
                <Button
                  type="button"
                  className="App__clear"
                  onClick={this.removeGood}
                  variant="outlined"
                >
                  Clear
                </Button>
              )}
            </header>
          </div>

          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {goodsFromServer.map(good => {
              const isSelectedGood = selectedGood === good;

              return (
                <ListItem
                  key={uuidv4()}
                  className={classNames(
                    { 'Good--active': isSelectedGood },
                  )}
                >
                  <ListItemText primary={good} />
                  {isSelectedGood
                    ? (
                      <Button
                        type="button"
                        onClick={this.removeGood}
                        variant="outlined"
                      >
                        Remove
                      </Button>
                    )

                    : (
                      <Button
                        type="button"
                        onClick={() => this.chooseGood(good)}
                        variant="outlined"
                      >
                        Select
                      </Button>
                    )}
                </ListItem>
              );
            })}
          </List>
        </main>
      </>
    );
  }
}
