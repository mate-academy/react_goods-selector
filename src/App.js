import React from 'react';
import classNames from 'classnames';
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
    selectedGoods: [],
  }

  addSelectedGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, goods],
    });
  }

  removeSelectedGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(el => el !== goods),
    });
  }

  deleteSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          {`Selected goods: ${selectedGoods.join(', ')}`}
        </h1>
        {selectedGoods.length !== 0 && (
          <button
            type="button"
            className="cross"
            onClick={this.deleteSelectedGoods}
          >
            Х
          </button>
        )}
        <p className="selected">
          {`Selected: 
        ${selectedGoods.length}`}
        </p>

        <ul className="list">
          {goodsFromServer.map(product => (
            <li key={product} className="item">
              <span className={`item-text, ${
                selectedGoods.includes(product)
                  ? 'active' : ''}`}

              >
                {product}
              </span>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => this.addSelectedGoods(product)}
                  className={classNames(`add`, {
                    addSelected: selectedGoods.includes(product) === true,
                  })}
                >
                  Select
                </button>
                <button
                  type="button"
                  onClick={() => this.removeSelectedGoods(product)}
                  className="remove"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
