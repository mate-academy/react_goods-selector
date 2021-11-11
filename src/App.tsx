import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import './App.scss';

interface Good {
  key: string;
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
].map((good) => ({
  key: uuidv4(),
  value: good,
}));

type Props = {};
interface State {
  selectedGoods: string[];
}
class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: [],
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  };

  removeGood = (selectedGood: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter((good) => good !== selectedGood),
    });
  };

  activeButtonStatus = (good: string) => (this.state.selectedGoods.includes(good) ? 'list__item--active' : '');

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${
          selectedGoods[selectedGoods.length - 1]
        }`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {this.formatTitle()}
        </h1>

        <ul className="goods-list">
          {goodsFromServer.map((good) => {
            const isGoodSelected = selectedGoods.includes(good.value);
            const buttonCallback = isGoodSelected
              ? () => this.removeGood(good.value)
              : () => this.addGood(good.value);
            const buttonTitle = isGoodSelected ? 'Remove good' : 'Add good';
            const buttonToRender = (
              <button type="button" className="button" onClick={buttonCallback}>
                {buttonTitle}
              </button>
            );

            return (
              <li
                className={classnames('goods-list__item', {
                  active: isGoodSelected,
                })}
                key={good.key}
              >
                {good.value}
                {buttonToRender}
              </li>
            );
          })}
        </ul>
        {selectedGoods.length ? (
          <button
            className="button button--clear"
            type="button"
            onClick={this.clearSelection}
          >
            Clear
          </button>
        ) : undefined}
      </div>
    );
  }
}
export default App;
