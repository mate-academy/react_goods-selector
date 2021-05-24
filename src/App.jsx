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

  render() {
    const { selectedGoods } = this.state;
    const goodsIsSelected = selectedGoods.length > 0;

    return (
      <div className="app">
        <h1>
          Selected good: -
          {goodsIsSelected
            ? ` ${selectedGoods.slice(0, selectedGoods.length - 1).join(', ')}
                ${selectedGoods.length > 1 ? 'and' : ''}
                ${selectedGoods[selectedGoods.length - 1]}
                ${selectedGoods.length === 1 ? 'is' : 'are'} selected`
            : ' No goods selected'
          }
        </h1>
        {goodsIsSelected
          && <button type="button" onClick={this.clearItems}>X</button>
        }
        <ul className="app__list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={`app__item ${selectedGoods.includes(item)
                && 'app__item--active'
              }`}
            >
              <button
                type="button"
                onClick={() => (
                  selectedGoods.includes(item)
                    ? this.removeItem(item)
                    : this.selectItem(item))}
              >
                {selectedGoods.includes(item) ? 'remove' : 'add'}
              </button>
              {' '}
              {item}
            </li>
          ))}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;

// .map((item, index, array) => {
//   if (index === array.length - 2) {
//     return `${item} and ${array[index + 1]}`;
//   };

//   return `${item}`;
// });
