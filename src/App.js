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

  clearingSelectedGoodslist = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  }

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
        <h1>
          Selected good:
          {' '}
          {this.makeSelectedGoodslist()}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              className={classNames('app__list',
                { activList: this.state.selectedGoods.includes(good) })}
              key={goodsFromServer.indexOf(good)}
            >
              {good}
              <button
                type="button"
                onClick={() => (
                  this.state.selectedGoods.includes(good)
                    ? this.removeGood(good)
                    : this.selectGood(good)
                )}
                className={classNames('list__button',
                  { activ: !this.state.selectedGoods.includes(good) })}
              >
                {this.state.selectedGoods.includes(good)
                  ? 'Unselect'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="clear--button"
          onClick={() => this.clearingSelectedGoodslist()}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
