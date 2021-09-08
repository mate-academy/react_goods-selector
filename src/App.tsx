import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    const { selectedGoods } = this.state;

    if (this.state.selectedGoods.includes(good)) {
      const index = selectedGoods.lastIndexOf(good);

      selectedGoods.splice(index, 1);
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods],
      }));
    }
  };

  resetGood = () => {
    this.setState({ selectedGoods: [] });
  };

  message = () => {
    const { selectedGoods } = this.state;

    let message = '';

    if (selectedGoods.length === 0) {
      message = 'No selected goods';
    }

    if (selectedGoods.length === 1) {
      message = `${selectedGoods} is selected`;
    }

    if (selectedGoods.length > 1) {
      const firstPartOfGoods = selectedGoods.slice(0, -1).join(', ');
      const lastGood = selectedGoods[selectedGoods.length - 1];

      message = `${firstPartOfGoods} and ${lastGood} are selected`;
    }

    return message;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.message()}
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              onClick={this.resetGood}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={classNames(selectedGoods.includes(good) ? 'App__good--active' : 'App__good')}
              >
                {good}
                {!selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="App__button"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    add
                  </button>
                )}
                {selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="App__button"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    delete
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
