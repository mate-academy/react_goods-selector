import { Component } from 'react';
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

type Props = {};
interface State {
  selectedGoods: string[]
}

class App extends Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (selectedGood: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== selectedGood),
    }));
  };

  clearSelection = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  productList = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, selectedGoods.length - 2).join(', ')}, ${selectedGoods[selectedGoods.length - 2]} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.productList()}</h1>
        <ul>
          {goodsFromServer.map((good) => {
            const isGoodSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                key={good}
              >
                {good}
                <button
                  type="button"
                  onClick={
                    isGoodSelected
                      ? this.removeGood(good)
                      : this.selectGood(good)
                  }
                >
                  {isGoodSelected ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
        {!!selectedGoods.length
          && (
            <button
              type="button"
              onClick={this.clearSelection}
            >
              Remove all goods
            </button>
          )}
      </div>
    );
  }
}

export default App;
