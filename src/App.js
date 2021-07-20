import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    selectedGood: [],
    sentence: '',
  }

  addGood = (good) => {
    this.state.selectedGood.push(good);
  }

  removeGood = (good) => {
    const index = this.state.selectedGood.indexOf(good);

    this.state.selectedGood.splice(index, 1);
  }

  getClearList = () => {
    this.setState({
      selectedGood: [], sentence: '',
    });
  }

  render() {
    const { selectedGood, sentence } = this.state;
    const newSentence = () => (
      this.setState({ sentence: selectedGood.join(', ') })
    );

    return (
      <div className="app">
        <div className="list-title">
          <div className="list-title__block">
            { (sentence)
              ? (
                <>
                  <h1 className="list-title__title">Selected good:</h1>
                  <p className="list-title__content">{sentence}</p>
                </>
              )
              : <h1 className="list-title__title">No goods selected</h1> }
          </div>
          {
            (sentence)
              ? (
                <button
                  className="btn list-title__btn"
                  type="button"
                  onClick={() => {
                    this.getClearList();
                  }}
                >
                  Clear
                </button>
              )
              : null
          }
        </div>
        <ul className="todo-list">
          {
            goodsFromServer.map(good => (
              <li
                className={classNames(`todo`, {
                  active: sentence.includes(good),
                })}
                key={good}
              >
                <span className="todo__content">{good}</span>
                {
                  (!sentence.includes(good))
                    ? (
                      <button
                        className="btn btn-add"
                        type="button"
                        onClick={() => {
                          this.addGood(good);
                          newSentence();
                        }}
                      >
                        Select
                      </button>
                    )
                    : (
                      <button
                        className="btn btn-remove"
                        type="button"
                        onClick={() => {
                          this.removeGood(good);
                          newSentence();
                        }}
                      >
                        Remove
                      </button>
                    )
                }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
