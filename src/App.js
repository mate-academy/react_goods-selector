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

  renderingTitle = () => {
    let renderTitle = '';

    if (this.state.selectedGoods.length === 0) {
      renderTitle = 'NO GOODS SELECTED';
    } else if (this.state.selectedGoods.length === 1) {
      renderTitle = `${this.state.selectedGoods} is selected`;
    } else if (this.state.selectedGoods.length > 1) {
      const lastItemSelected
        = this.state.selectedGoods[this.state.selectedGoods.length - 1];
      const copyOfSelected = [...this.state.selectedGoods];

      copyOfSelected.length -= 1;
      renderTitle
        = `${copyOfSelected.join(', ')} and ${lastItemSelected} are selected`;
    }

    return renderTitle;
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
      prevState => prevState.selectedGoods.splice(
        prevState.selectedGoods.indexOf(goods), 1,
      ),
    );
  };

  clearSelect = () => {
    this.setState(
      prevState => prevState.selectedGoods.splice(
        0, prevState.selectedGoods.length,
      ),
    );
  };

  render() {
    return (
      <div className="App">
        <div className="list-title">
          <h1>
            {
            `Selected good: ${this.renderingTitle()}`
            }
          </h1>
          { this.state.selectedGoods.length
            ? (
              <button
                type="button"
                className="button button--clear"
                onClick={() => this.clearSelect()}
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
              {this.isSelected(goods) || (
                <button
                  key={goods}
                  type="button"
                  className="button"
                  onClick={() => {
                    this.addGoodsToSelect(goods);
                  }}
                >
                  Add
                </button>
              )}
              {this.isSelected(goods) && (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.removeFromSelect(goods);
                  }}
                >
                  Remove
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
