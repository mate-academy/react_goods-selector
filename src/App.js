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

  addOrRemoveSelectedGood = (event, product) => {
    const { selectedGoods } = this.state;
    const newSelectedGoods = [...selectedGoods];
    const index = newSelectedGoods.indexOf(product);

    if (index === -1) {
      newSelectedGoods.push(product);
    } else {
      newSelectedGoods.splice(index, 1);
    }

    this.setState({
      selectedGoods: newSelectedGoods,
    });
  }

  clearSelectedGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  printHeader = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return '';
    }

    return selectedGoods.reduce((prev, product) => `${prev}, ${product}`);
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected goods: - ${this.printHeader()}`}

          <button
            className="button--clear"
            type="button"
            onClick={this.clearSelectedGoods}
          >
            x
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(product => (
            <li
              className={classNames('list__item', {
                'list__item--selected': selectedGoods.includes(product),
              })}
              key={product}
            >
              <span>
                {product}
              </span>
              <button
                type="button"
                className="list__button"
                onClick={(event) => {
                  this.addOrRemoveSelectedGood(event, product);
                }}
              >
                Add / Remove
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
