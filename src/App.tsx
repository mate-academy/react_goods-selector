import { Component } from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Duplings',
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
  selectedGoods: string[],
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  getCorrectTitle() {
    if (!this.state.selectedGoods.length) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods} is selected`;
    }

    return `${this.state.selectedGoods.slice(0, -1).join(', ')} and ${this.state.selectedGoods.slice(-1)} are selected`;
  }

  addedGoods = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removedGoods = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods
        .filter(prevGood => prevGood !== good),
    }));
  };

  clearedBin = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <div className="App__head">
            <h1 className="App__title">
              {this.getCorrectTitle()}
            </h1>

            <button
              className="button is-white"
              type="button"
              onClick={this.clearedBin}
            >
              Clear
            </button>
          </div>

          <ul className="App__list">
            {goodsFromServer.map(good => (
              <div>
                <li className="App__item box" key={good}>
                  <p>{good}</p>

                  {!selectedGoods.includes(good)
                    ? (
                      <button
                        className="button is-small is-success is-light"
                        type="button"
                        onClick={() => {
                          this.addedGoods(good);
                        }}
                      >
                        Select
                      </button>
                    )
                    : (
                      <button
                        className="button is-small is-danger is-light"
                        type="button"
                        onClick={() => {
                          this.removedGoods(good);
                        }}
                      >
                        Remove
                      </button>
                    )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
