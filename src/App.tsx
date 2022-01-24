import React from 'react';
import './App.scss';

import classNames from 'classnames';

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

type State = {
  goods: string[];
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    selectedGoods: ['Jam'],
  };

  handleClick = (item: string) => {
    this.setState(prev => {
      return !prev.selectedGoods.includes(item)
        ? { selectedGoods: [...prev.selectedGoods, item] }
        : { selectedGoods: prev.selectedGoods.filter(good => item !== good) };
    });
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  setTitle = (selectedGoods: string[]) => {
    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods} is selected`;
      default: {
        const title = selectedGoods.map((item, index) => {
          if (index < selectedGoods.length - 2) {
            return `${item},`;
          }

          if (index === selectedGoods.length - 2) {
            return `${item}`;
          }

          return `and ${item} are selected`;
        });

        return `${title.join(' ')}`;
      }
    }
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div>
        <h1>
          {this.setTitle(selectedGoods)}
        </h1>

        <div>
          {goods.map(item => (
            <div
              key={item}
              className={classNames(
                { selected: selectedGoods.includes(item) },
                'item',
              )}
            >
              <div className="content">
                <div>
                  {item}
                </div>
                <button
                  className="button"
                  type="button"
                  onClick={() => {
                    this.handleClick(item);
                  }}
                >
                  {selectedGoods.includes(item) ? 'Remove' : 'Add'}
                </button>
              </div>
            </div>
          ))}
          {selectedGoods.length !== 0 && (
            <button
              className="button"
              type="button"
              onClick={this.clearList}
            >
              X
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
