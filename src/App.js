import React from 'react';
import './App.scss';

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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  getRenderingTitle = () => {
    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods} is selected`;
    }

    if (this.state.selectedGoods.length > 1) {
      return `${this.state.selectedGoods.slice(0, -1).join(', ')}
        and ${this.state.selectedGoods[this.state.selectedGoods.length - 1]}
        are selected`;
    }

    return 'NO GOODS SELECTED';
  };

  isSelected = goods => (
    this.state.selectedGoods.some(
      goodsItem => goodsItem === goods,
    )
  );

  addGoodsToSelect = (goods) => {
    this.setState(prevState => prevState.selectedGoods.push(goods));
  };

  removeFromSelect = (goods) => {
    this.setState(
      prevState => ({
        selectedGoods: prevState.selectedGoods.filter(good => good !== goods),
      }
      ),
    );
  };

  clearGoods = () => (this.setState({ selectedGoods: [] }));

  render() {
    return (
      <div className="App">
        <div className="list-title">
          <h1>
            {
            `Selected good: ${this.getRenderingTitle()}`
            }
          </h1>
          { this.state.selectedGoods.length
            ? (
              <button
                type="button"
                className="button button--clear"
                onClick={this.clearGoods}
              >
                X
              </button>
            )
            : ''
          }
        </div>
        <ul className="list-of-goods">
          {goodsFromServer.map(goods => (
            <li
              key={goods}
              className={`list-item ${this.isSelected(goods) ? 'active' : ''}`}
            >
              {goods}
              <button
                key={goods}
                type="button"
                className="button"
                onClick={this.isSelected(goods)
                  ? () => {
                    this.removeFromSelect(goods);
                  }
                  : () => {
                    this.addGoodsToSelect(goods);
                  }
                }
              >
                {this.isSelected(goods) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
