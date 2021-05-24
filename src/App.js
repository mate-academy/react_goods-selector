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
    goods: goodsFromServer.map(good => ({
      name: good,
      isSelected: good === 'Jam',
    })),
  };

  selectItem = (index) => {
    this.setState((state) => {
      const newGoods = [...state.goods];

      newGoods[index].isSelected = !newGoods[index].isSelected;

      return { goods: newGoods };
    });
  }

  clearSelectedItems = () => {
    this.setState(state => ({
      goods: state.goods.map(good => ({
        name: good.name,
        isSelected: false,
      })),
    }));
  }

  render() {
    const { goods } = this.state;
    const selectedItems = goods.filter(good => good.isSelected === true);

    return (
      <div className="App">
        <div className="heading">
          {selectedItems.length > 0 && (
            <>
              <h1 className="heading__text">
                {selectedItems.length === 1
                  ? `${selectedItems[0].name} is selected`
                  : `${selectedItems.map(good => good.name).join(', ')
                  } are selected`
                }
              </h1>
              <button
                type="button"
                className="heading__button"
                onClick={this.clearSelectedItems}
              >
                x
              </button>
            </>
          )}
          {selectedItems.length === 0 && (
            <h1 className="heading__text">
              No goods selected
            </h1>
          )}
        </div>
        <ul className="list">
          {goods.map((good, index) => (
            <li
              key={good.name}
              className={`list__item${good.isSelected
                ? ` list__item--selected`
                : ''
              }`}
            >
              {good.name}
              <button
                type="button"
                className={`list__button${good.isSelected
                  ? ` list__button--selected`
                  : ''
                }`}
                onClick={() => {
                  this.selectItem(index);
                }}
              >
                {good.isSelected ? `Remove` : `Add`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
