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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((prevState) => (
      { selectedGood: [...prevState.selectedGood, good] }
    ));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: prevState.selectedGood.filter((item) => item !== good),
    }));
  };

  createMessage = (goods: string[]) => {
    const { length } = goods;

    switch (length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods.join(' and ')} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[length - 1]} are selected`;
    }
  };

  clearGoods = () => (
    this.setState({ selectedGood: [] })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="list-item">
          <h1>
            {this.createMessage(this.state.selectedGood)}
            {'   '}

            <button
              type="button"
              onClick={this.clearGoods}
            >
              Clear
            </button>
          </h1>
        </div>

        <ul>
          {goodsFromServer.map((good) => {
            const buttonText = selectedGood.includes(good)
              ? 'Remove'
              : 'Select';

            const handleClick = () => (
              selectedGood.includes(good)
                ? this.removeGood(good)
                : this.addGood(good)
            );

            return (
              <div className="goods-container">
                <li key={good}>{good}</li>
                <button
                  type="button"
                  onClick={handleClick}
                >
                  {buttonText}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
