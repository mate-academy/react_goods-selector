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

type GoodItem = typeof goodsFromServer[number];
interface State {
  [key: GoodItem]: boolean;
}

class App extends React.Component<Props, State> {
  state = goodsFromServer.reduce((stateObj: State, good: GoodItem) => {
    return { ...stateObj, [good]: false };
  }, {});

  initialState = { ...this.state };

  getActiveGoods() {
    const activeGoods = Object.entries(this.state).reduce((goods: string[], goodState) => {
      if (goodState[1]) {
        goods.push(goodState[0]);
      }

      return goods;
    }, []);

    if (activeGoods.length) {
      const joinedByAnd = activeGoods.splice(-2).join(' and ');

      return activeGoods.concat(joinedByAnd).join(', ').concat(' are selected');
    }

    return 'No goods selected';
  }

  changeGoodState = (good: GoodItem) => {
    this.setState(prevState => ({
      ...prevState,
      [good]: !prevState[good],
    }));
  };

  clearSelection = () => {
    this.setState({
      ...this.initialState,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.getActiveGoods()}</h1>
        <ul className="GoodsList">
          {goodsFromServer.map(good => {
            return (
              <li
                className={
                  `GoodsItem ${this.state[good] ? 'GoodsItem--active' : ''}`
                }
              >
                <span>{good}</span>
                {' '}
                <button
                  type="button"
                  onClick={
                    () => {
                      this.changeGoodState(good);
                    }
                  }
                >
                  {!(this.state[good]) ? 'Add' : 'Remove'}
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={this.clearSelection}>X</button>
      </div>
    );
  }
  // return (
  // );
};

export default App;
