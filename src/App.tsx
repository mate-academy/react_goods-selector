import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  toggleHandler = (word:string) => {
    this.setState({
      selectedGood: word,
    });
  };

  removeHandler = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood.length === 0
          ? <h1 className="title is-1 is-spaced">No goods selected</h1>
          : (
            <>
              <h1 className="title is-1 is-spaced">
                Selected good:
                {' '}
                {selectedGood}
                {' '}
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.removeHandler}
                >
                  Clear
                </button>
              </h1>
            </>
          )}
        {goodsFromServer.map(good => {
          const { selectedGood: selectGood } = this.state;

          return (
            <ul>
              <li
                key={good + Math.random()}
              >
                {good}
                <button
                  type="button"
                  className={selectGood === good
                    ? 'button is-danger '
                    : 'button is-success is-light'}
                  onClick={() => {
                    return selectGood !== good
                      ? this.toggleHandler(good)
                      : this.removeHandler();
                  }}
                >
                  {selectGood === good ? 'Remove' : 'Select'}
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
