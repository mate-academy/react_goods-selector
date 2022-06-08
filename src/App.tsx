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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [goodsFromServer[8]],
  };

  goodToSelect = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods
          .filter(product => product !== good),
      }));
    } else {
      this.setState({ selectedGoods: [...selectedGoods, good] });
    }
  };

  listView = (goods: string[]) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.listView(selectedGoods)}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (

            <div className="App__item" key={good}>
              <li>
                {good}
              </li>
              <button
                type="button"
                className="button"
                onClick={() => {
                  this.goodToSelect(good);
                }}
              >
                {!selectedGoods.includes(good) ? 'Select' : 'Remove'}
              </button>
            </div>

          ))}
        </ul>

        {selectedGoods.length !== 0
          && (
            <button
              type="button"
              className="button button-clear"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
      </div>
    );
  }
}

export default App;
