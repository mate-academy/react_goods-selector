import React from 'react';
import { v4 as uuid } from 'uuid';
import './App.scss';

interface Good {
  id: string;
  value: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  id: uuid(),
  value: good,
}));

type Props = {};

interface State {
  selectedGoods: string[];
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  };

  removeGood = (selectedGood: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(good => good !== selectedGood),
    });
  };

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]}`;
    }
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {'Selected good: '}
          {this.formatTitle()}
        </h1>

        <button
          type="button"
          className="App--button App--button--clear"
          onClick={this.clearSelection}
        >
          Clear
        </button>

        <ul className="App--ul">
          {goodsFromServer.map(
            good => {
              const isGoodSelected = selectedGoods.includes(good.value);

              const buttonCallback = isGoodSelected
                ? () => this.removeGood(good.value)
                : () => this.addGood(good.value);

              const buttonTitle = isGoodSelected
                ? 'Remove good'
                : 'Add good';

              const buttonToRender = (
                <button
                  className="App--button"
                  type="button"
                  onClick={buttonCallback}
                >
                  {buttonTitle}
                </button>
              );

              return (
                <li
                  key={good.id}
                  className={
                    isGoodSelected
                      ? 'App--li App--li--active'
                      : 'App--li'
                  }
                >
                  {good.value}
                  {buttonToRender}
                </li>
              );
            },
          )}
        </ul>
      </div>
    );
  }
}

export default App;
