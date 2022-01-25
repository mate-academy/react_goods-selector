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
  'plov',
  'borsh',
  'kotleta',
  'oladki',
];

type State = {
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: [],
  };

  selectHandler = (good: string) => {
    if (!this.state.selectedGood.includes(good)) {
      this.setState((prevState) => ({
        selectedGood: [
          ...prevState.selectedGood,
          good,
        ],
      }));
    }
  };

  removeHandler = (good: string) => {
    const i = this.state.selectedGood.findIndex(item => item === good);

    this.state.selectedGood.splice(i, 1);
    // eslint-disable-next-line no-console
    console.log(i);

    this.setState((prevState) => ({
      selectedGood: [
        ...prevState.selectedGood,
      ],
    }));
  };

  displaySelectedGoods = () => {
    if (this.state.selectedGood.length === 0) {
      return 'No goods selected';
    }

    if (this.state.selectedGood.length === 1) {
      return `${this.state.selectedGood[0]} is selected`;
    }

    const result = [];

    for (let i = 0; i < this.state.selectedGood.length; i += 1) {
      switch (i) {
        case (this.state.selectedGood.length - 1):
          result.push(`${this.state.selectedGood[i]} are selected.`);
          break;

        case (this.state.selectedGood.length - 2):
          result.push(`${this.state.selectedGood[i]} and `);
          break;

        default:
          result.push(`${this.state.selectedGood[i]}, `);
      }
    }

    return result.join('');
  };

  clearSelected = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {this.displaySelectedGoods()}
          {(this.state.selectedGood.length > 0) && (
            <button
              type="button"
              className="button"
              onClick={() => {
                this.clearSelected();
              }}
            >
              X
            </button>
          )}
        </h1>
        <p>
          {`${selectedGood.length} from ${goodsFromServer.length}`}
        </p>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              {!this.state.selectedGood.includes(good)
              && (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.selectHandler(good);
                  }}
                >
                  Add
                </button>
              )}
              {good}
              {this.state.selectedGood.includes(good)
              && (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.removeHandler(good);
                  }}
                >
                  Remove
                </button>
              )}

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
