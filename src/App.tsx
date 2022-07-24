import { Component } from 'react';
import './App.scss';
import goods from './goods';

type State = {
  word:string[];
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    word: ['Jam'],
  };

  clearHandler = () => {
    this.setState({ word: [] });
  };

  selectHandler = (el: string) => {
    this.setState(state => (
      { word: [...state.word, el] }
    ));
  };

  removeHandler = (el: string) => {
    this.setState(state => (
      { word: [...state.word.filter(element => element !== el)] }
    ));
  };

  render() {
    const { word } = this.state;

    return (
      <main className="App App__position">
        <header className="App__header">
          { word.length > 0 ? (
            <>
              <h1 className="App__title">
                {`${word.join(', ')} is selected`}
              </h1>
              <button
                type="button"
                className="App__clear App__button"
                onClick={this.clearHandler}
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
                <li className={`Good ${word.includes(el) && 'Good--active'}`}>
                  {el}
                  { !word.includes(el)
                    ? (
                      <button
                        type="button"
                        className="App__select App__button"
                        onClick={() => {
                          this.selectHandler(el);
                        }}
                      >
                        Select
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="App__remove App__button"
                        onClick={() => {
                          this.removeHandler(el);
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
