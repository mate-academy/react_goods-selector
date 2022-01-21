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
    selectedGoods: [],
  };

  handleClick = (item: string) => {
    this.setState(prev => {
      let goods = {};

      if (!prev.selectedGoods.includes(item)) {
        goods = { selectedGoods: [...prev.selectedGoods, item] };
      } else {
        prev.selectedGoods.splice(prev.selectedGoods.indexOf(item), 1);
        goods = { selectedGoods: prev.selectedGoods };
      }

      return goods;
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
      <div className="App">
        <h1 className="title">
          {this.setTitle(selectedGoods)}
        </h1>

        <div className="ui middle aligned divided list card">
          {goods.map(item => (
            <div
              key={item}
              className={classNames(
                'item',
                { selected: selectedGoods.includes(item) },
              )}
            >
              <div className="right floated content">
                <button
                  className="ui button"
                  type="button"
                  onClick={() => {
                    this.handleClick(item);
                  }}
                >
                  {selectedGoods.includes(item) ? 'Remove' : 'Add'}
                </button>
              </div>
              <div className="content">
                {item}
              </div>
            </div>
          ))}
          {selectedGoods.length !== 0 && (
            <button
              className="ui button"
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
