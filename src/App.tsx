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
  state: State = {
    selectedGood: ['Jam'],
  };

  addSelectedGood = (good: string) => {
    this.setState((prevState) => (
      { selectedGood: [...prevState.selectedGood, good] }
    ));
  };

  removeSelectedGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: prevState.selectedGood.filter((item) => item !== good),
    }));
  };

  createMessage = (goods: string[]) => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods.join(' and ')} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }
  };

  clearGoods = () => (
    this.setState({ selectedGood: [] })
  );

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">
            {this.createMessage(this.state.selectedGood)}
            { ' ' }

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
            const buttonText = this.state.selectedGood.includes(good)
              ? 'Remove'
              : 'Select';

            const handleClick = () => (
              this.state.selectedGood.includes(good)
                ? this.removeSelectedGood(good)
                : this.addSelectedGood(good)
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
