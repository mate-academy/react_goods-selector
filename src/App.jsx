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

  selectItem = (item) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  }

  removeItem = (item) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods
        .filter(currentItem => currentItem !== item),
    }));
  }

  clearItems = () => {
    this.setState({ selectedGoods: [] });
  }

  goodsTitle = (goods, goodsIsSelected) => {
    const lastItemOfgoods = goods[goods.length - 1];

    if (goodsIsSelected) {
      if (goods.length === 1) {
        return ` ${goods} is selected`;
      }

      return (
        `${goods.slice(0, goods.length - 1).join(', ')} and 
        ${lastItemOfgoods} are selected`
      );
    }

    return ' No goods selected';
  }

  render() {
    const { selectedGoods } = this.state;
    const goodsIsSelected = selectedGoods.length > 0;

    return (
      <div className="app">
        <h1>
          Selected good: -
          {' '}
          {this.goodsTitle(selectedGoods, goodsIsSelected)}
        </h1>
        {goodsIsSelected && (
          <button type="button" onClick={this.clearItems}>
            X
          </button>
        )}
        <ul className="app__list">
          {goodsFromServer.map((item) => {
            const itemIsIncluded = selectedGoods.includes(item);

            return (
              <li
                key={item}
                className={`app__item ${itemIsIncluded && 'app__item--active'}`}
              >
                <button
                  type="button"
                  onClick={() => (
                    itemIsIncluded
                      ? this.removeItem(item)
                      : this.selectItem(item))}
                >
                  {itemIsIncluded ? 'remove' : 'add'}
                </button>
                {' '}
                {item}
              </li>
            );
          })}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
