import { Component } from 'react';
import './App.scss';
import goods from './goods';

type State = {
  word:string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    word: 'Jam',
  };

  render() {
    const { word } = this.state;

    return (
      <main className="App App__position">
        <header className="App__header">
          { word.length > 0 ? (
            <>
              <h1 className="App__title">
                {`${word} is selected`}
              </h1>
              <button
                type="button"
                className="App__clear App__button"
                onClick={() => {
                  this.setState({ word: '' });
                }}
              >
                Clear
              </button>
            </>
          ) : (
            <h1 className="App__title">
              No goods selected
            </h1>
          )}
        </header>
        <ul className="App__ul">
          {
            goods.map(el => {
              return (
                <li className={`Good ${word === el && 'Good--active'}`}>
                  {el}
                  { word !== el
                    ? (
                      <button
                        type="button"
                        className="App__select App__button"
                        onClick={() => {
                          this.setState({ word: el });
                        }}
                      >
                        Select
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="App__remove App__button"
                        onClick={() => {
                          this.setState({ word: '' });
                        }}
                      >
                        Remove
                      </button>
                    )}
                </li>
              );
            })
          }
        </ul>
      </main>
    );
  }
}
