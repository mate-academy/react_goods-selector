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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  selectedGoods = () => this.state.selectedGoods.join(' ');

  isSelectedGoods = goods => this.state.selectedGoods.indexOf(goods) > -1;

  selectedGoodsText = () => {
    let text = '';
    const goodsList = this.state.selectedGoods;

    if (goodsList.length === 1) {
      text = `${goodsList[0]} is selected`;
    } else if (goodsList.length) {
      this.state.selectedGoods.forEach((goods, index, array) => {
        if (index === 0) {
          text += goods;
        } else if (index > 0 && index === array.length - 1) {
          text += ` and ${goods}`;
        } else {
          text += `, ${goods}`;
        }
      });
      text += ' are selected';
    } else {
      text = 'No goods selected';
    }

    return text;
  }

  selectGoods = (goods) => {
    if (!this.isSelectedGoods(goods)) {
      this.setState(state => (
        { selectedGoods: state.selectedGoods.concat(goods) }
      ));
    } else {
      this.setState(state => (
        { selectedGoods: state.selectedGoods.filter(good => good !== goods) }
      ));
    }
  }

  clearSelection = () => this.setState({ selectedGoods: [] })

  render() {
    return (
      <div className="App">
        <h1>
          {this.selectedGoodsText()}
          {this.state.selectedGoods.length > 0
          && (
          <button
            className="clearBtn"
            type="button"
            onClick={this.clearSelection}
          >
            X
          </button>
          )}
        </h1>
        {goodsFromServer.map(goods => (
          <button
            type="button"
            className="goodsContainer"
            key={goods}
            onClick={() => this.selectGoods(goods)}
          >
            <p>
              {goods}
            </p>
            <div className={classNames(`checkbox`, {
              checked: !this.isSelectedGoods(goods),
            })}
            >
              {this.isSelectedGoods(goods) ? 'Remove' : 'Add'}
            </div>

          </button>
        ))}
      </div>
    );
  }
}

export default App;
