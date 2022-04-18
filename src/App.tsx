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
    selectedGoods: ['Dumplings'],
  };

  makeTitle = (goods: string[]) => {
    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    return `${
      goods.slice(0, goods.length - 1).join(', ')
    } and ${
      goods[goods.length - 1]
    } are selected`;
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  remGood = (good: string) => {
    const filteredList = this.state.selectedGoods.filter(item => item !== good);

    return this.setState(() => ({
      selectedGoods: filteredList,
    }));
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
                  ? this.makeTitle(selectedGoods)
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
                      ? this.remGood(item)
                      : this.addGood(item)
                  )}
                >
                  {' '}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
