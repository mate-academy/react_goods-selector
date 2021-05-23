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
    selectedGood: ['Jam'],
  }

  constructor() {
    super();
    this.goods = [...this.state.selectedGood];
  }

  selectItem = (item) => {
    this.goods.push(item);
    this.setState({ selectedGood: this.goods });
  }

  removeItem = (item) => {
    this.goods.splice(this.goods.indexOf(item), 1);
    this.setState({ selectedGood: this.goods });
  }

  clearItems = () => {
    this.goods = [];
    this.setState({ selectedGood: this.goods });
  }

  render() {
    const { selectedGood } = this.state;
    const goodsIsSelected = selectedGood.length > 0;

    return (
      <div className="app">
        <h1>
          Selected good: -
          {goodsIsSelected
            ? `${selectedGood.join(', ')} is selected`
            : 'No goods selected'
          }
        </h1>
        {goodsIsSelected
          && <button type="button" onClick={this.clearItems}>X</button>
        }
        <ul className="app__list">
          {goodsFromServer.map(item => (
            <li
              className={`app__item ${selectedGood.includes(item)
                && 'app__item--active'
              }`}
            >
              <button
                type="button"
                onClick={() => (
                  selectedGood.includes(item)
                    ? this.removeItem(item)
                    : this.selectItem(item))}
              >
                select
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
