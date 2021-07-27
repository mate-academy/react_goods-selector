import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
].map(good => ({
  id: uuidv4(),
  good,
}));

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  selectGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods
        .filter(product => product !== good),
    }));
  }

  clearingSelectedGoodslist = () => this.setState({ selectedGoods: [] })

  makeSelectedGoodslist = () => {
    switch (this.state.selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGoods} is selected`;
      case 2:
        return `${this.state.selectedGoods.join(' and ')} are selected`;
      default: {
        return `${this.state.selectedGoods.join(', ')} are selected`;
      }
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          Selected good:
          {' '}
          {this.makeSelectedGoodslist()}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              className={classNames('app__list',
                { activList: this.state.selectedGoods.includes(good.good) })}
              key={good.id}
            >
              {good.good}
              <button
                type="button"
                onClick={() => (
                  this.state.selectedGoods.includes(good.good)
                    ? this.removeGood(good.good)
                    : this.selectGood(good.good)
                )}
                className="list__button"
              >
                {this.state.selectedGoods.includes(good.good)
                  ? 'Unselect'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="clear--button"
          onClick={this.clearingSelectedGoodslist}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
