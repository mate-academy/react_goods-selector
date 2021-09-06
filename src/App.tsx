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

interface State {
  selectedGood: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: [],
  };

  addGood = (good: string) => {
    this.setState(({ selectedGood }) => ({
      selectedGood: [...selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(({ selectedGood }) => ({
      selectedGood: [...selectedGood.filter(item => item !== good)],
    }));
  };

  resetGoods = () => {
    this.setState({
      selectedGood: [],
    });
  };

  changeChoice = (good: string) => {
    if (this.state.selectedGood.some(item => item === good)) {
      this.removeGood(good);
    } else {
      this.addGood(good);
    }
  };

  titleInfo = (selectedGood: string[]) => {
    let text = '';

    if (selectedGood.length < 1) {
      text = 'No goods selected...';
    }

    if (selectedGood.length === 1) {
      text = ' is selected.';
    }

    if (selectedGood.length > 1) {
      text = ' are selected';
    }

    return text;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="App__title">
          <h1 className="App__text">
            <b>Selected good: </b>
            {selectedGood.join(', ')}
            {this.titleInfo(selectedGood)}
          </h1>
          <button
            type="button"
            className={selectedGood.length < 1
              ? 'App__button--reset-off'
              : 'btn btn-danger'}
            onClick={() => {
              this.resetGoods();
            }}
          >
            reset
          </button>
        </div>
        <section className="App__list">
          <div className="App__cards">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={`App__card ${selectedGood.some(item => item === good)
                  ? 'App__card-select'
                  : 'App__card'}`}
              >
                <p>{good}</p>
                <button
                  type="button"
                  className="App__button btn btn-primary"
                  onClick={() => {
                    this.changeChoice(good);
                  }}
                >
                  {selectedGood.some(item => item === good)
                    ? 'remove'
                    : 'add'}
                </button>
              </li>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
