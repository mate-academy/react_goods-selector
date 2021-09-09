import React from 'react';
// import './App.scss';

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

type Props = {};

class App extends React.PureComponent<Props, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods.filter(item => item !== good)],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    let preparedGoods = selectedGoods;

    if (selectedGoods.length > 1) {
      const firstPart = selectedGoods.slice(0, selectedGoods.length - 1).join(', ');

      preparedGoods = [firstPart, 'and', selectedGoods[selectedGoods.length - 1]];
    }

    return (
      <div
        className="App"
        style={{ color: 'darkblue' }}
      >
        <h1>
          Selected good:
          {!!selectedGoods.length || 'No goods selected'}
          {preparedGoods.join(' ')}
          {!selectedGoods.length || (
            <button
              type="button"
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              X
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li>
              <span style={selectedGoods.includes(good) ? { backgroundColor: 'yellow' } : {}}>
                {good}
              </span>
              {selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => this.addGood(good)}
                  >
                    Select
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
