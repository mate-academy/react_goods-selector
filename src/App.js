import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No Goods Selected';
      case 1:
        return `${selectedGoods[0]} is Selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and
          ${selectedGoods.slice(-1)} are Selected`;
    }
  }

  selectItem = (item) => {
    this.setState((prevState) => {
      const result = [...prevState.selectedGoods];

      result.push(item);

      return {
        selectedGoods: result,
      };
    });
  }

  unSelectItem = (item) => {
    this.setState((prevState) => {
      const result = [...prevState.selectedGoods];
      const index = result.indexOf(item);

      result.splice(index, 1);

      return {
        selectedGoods: result,
      };
    });
  }

  clearAllSelections = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.formatTitle()}
        </h1>
        <button
          type="button"
          onClick={this.clearAllSelections}
          disabled={this.state.selectedGoods.length === 0}
        >
          Clear all Selections
        </button>
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames('goods__item', {
                selectedGood: this.state.selectedGoods.includes(item),
              })}
            >
              {item}
              <button
                type="button"
                onClick={
                  this.state.selectedGoods.includes(item)
                    ? () => {
                      this.unSelectItem(item);
                    }
                    : () => {
                      this.selectItem(item);
                    }
                }
              >
                {this.state.selectedGoods.includes(item)
                  ? 'Unselect'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
