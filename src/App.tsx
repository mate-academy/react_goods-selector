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

  isSelected = (item: string, selectedGoods: string[]) => {
    if (!this.state.selectedGoods.includes(item)) {
      this.setState({ selectedGoods: [...selectedGoods, item] });
    } else {
      selectedGoods.splice(selectedGoods.indexOf(item), 1);
      this.setState({ selectedGoods });
    }
  };

  setClearList = () => {
    this.setState({ selectedGoods: [] });
  };

  setTitle = (selectedGoods: string[]) => {
    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods} is selected`;
      default: {
        const title = selectedGoods.map((item) => {
          if (selectedGoods.indexOf(item) < selectedGoods.length - 2) {
            return `${item},`;
          }

          if (selectedGoods.indexOf(item) === selectedGoods.length - 2) {
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
              <div
                className="right floated content"
              >
                <button
                  className="ui button"
                  type="button"
                  onClick={() => {
                    this.isSelected(item, selectedGoods);
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
              onClick={this.setClearList}
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
