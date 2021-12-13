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
  selected: string;
};

class App extends React.Component<{}, State> {
  state = {
    selected: 'Jam',
  };

  clearSelected = () => {
    this.setState({
      selected: '',
    });
  };

  selectGood = (newGood: string) => {
    this.setState({
      selected: newGood,
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className={selected ? 'App__btn--active' : 'App__btn--hidden'}
          onClick={this.clearSelected}
        >
          X
        </button>
        <h1>
          {selected
            ? `${selected} is selected`
            : 'No goods selected' }
        </h1>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li key={good} className="App__item">
              <span className={selected === good ? 'App__good--active' : 'App__good'}>
                {good}
              </span>

              <button
                type="button"
                className={selected === good ? 'App__btn--hidden' : 'App__btn--active'}
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
