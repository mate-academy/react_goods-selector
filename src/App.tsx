import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type Props = {};
type State = {
  selectedGoods: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGoodsToTitle = (goods: string[]) => {
    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    const startTitle = goods.slice(0, goods.length - 1).join(', ');
    const endTitle = goods[goods.length - 1];

    return `${startTitle} and ${endTitle} are selected`;
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    const filteredList = this.state.selectedGoods.filter(item => item !== good);

    return this.setState(() => ({
      selectedGoods: filteredList,
    }));
  };

  selectAllGoods = () => {
    this.setState({ selectedGoods: goodsFromServer });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <div className="App__header-container">
            <h1>
              {
                (selectedGoods.length > 0)
                  ? this.addGoodsToTitle(selectedGoods)
                  : 'Your shopping list is empty. Pick an item'
              }
            </h1>
            {
              (selectedGoods.length > 0) && (
                <button
                  type="button"
                  className="App__header-button"
                  onClick={this.clearList}
                >
                  &nbsp;
                </button>
              )
            }
          </div>
          <ul className="App__list">
            {goodsFromServer.map(item => (
              <li
                key={item}
                className={`
                App__list--list-item ${selectedGoods.includes(item)
                ? 'App__list--list-item_selected'
                : ''}
                  `}
              >
                <p>
                  {item}
                </p>
                <button
                  type="button"
                  className={
                    `App__list--list-button ${selectedGoods.includes(item)
                      ? 'App__list--list-button_remove'
                      : 'App__list--list-button_add'}`
                  }
                  onClick={() => (
                    (selectedGoods.includes(item))
                      ? this.removeGood(item)
                      : this.addGood(item)
                  )}
                >
                  {' '}
                </button>
              </li>
            ))}
          </ul>
          {(selectedGoods.length !== goodsFromServer.length) && (
            <div className="App__select-all-button--container">
              <button
                type="button"
                className="App__select-all-button"
                onClick={this.selectAllGoods}
              >
                Select all goods
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
