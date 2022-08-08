import { Component, ReactNode } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
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
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {
              selectedGood.length
                ? `${selectedGood} is selected`
                : 'No goods selected'
            }
          </h1>

          { selectedGood && (
            <button
              type="button"
              className="App__clear"
              onClick={this.removeGood}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="Goods">
          {goodsFromServer.map(good => {
            const isSelectedGood = selectedGood === good;

            return (
              <div
                className={classNames(
                  'Goods__row',
                  { 'Good--active': isSelectedGood },
                )}
                key={uuidv4()}
              >
                <li className="Good">
                  {good}
                </li>

                <div>
                  {isSelectedGood && (
                    <button
                      type="button"
                      className="Good__remove"
                      onClick={this.removeGood}
                    >
                      Remove
                    </button>
                  )}

                  {!isSelectedGood && (
                    <button
                      type="button"
                      className="Good__select"
                      onClick={() => this.chooseGood(good)}
                    >
                      Select
                    </button>
                  )}

                </div>
              </div>
            );
          })}
        </ul>
      </main>
    );
  }
}
