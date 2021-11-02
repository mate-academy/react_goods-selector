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
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  prepareTitle() {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No good selected';
    }

    const [firstGoods] = selectedGoods;

    if (selectedGoods.length > 1) {
      let title = selectedGoods.slice(0, -1).join(', ');

      title += ` and ${selectedGoods[selectedGoods.length - 1]} are selected`;

      return title;
    }

    return `${firstGoods} is selected`;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">{this.prepareTitle()}</h1>
        <button
          disabled={selectedGoods.length === 0}
          type="button"
          className="button"
          onClick={() => {
            this.setState({ selectedGoods: [] });
          }}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map((good) => (
            <li
              className={`good ${selectedGoods.includes(good) ? 'selected' : ' '}`}
              key={good}
            >
              {good}
              {selectedGoods.includes(good)
                ? (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.setState((prev) => ({
                          selectedGoods: prev.selectedGoods.filter(element => element !== good),
                        }));
                      }}
                    >
                      Delete
                    </button>
                  )
                : (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.setState((prev) => ({
                          selectedGoods: [
                            ...prev.selectedGoods,
                            good,
                          ],
                        }));
                      }}
                    >
                      Add
                    </button>
                  )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
