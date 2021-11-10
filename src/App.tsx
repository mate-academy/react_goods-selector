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
  state: State = goodsFromServer.reduce((stateObj: State, goods: GoodItem) => {
    return { ...stateObj, [goods]: false };
  }, {});

  initialState: State = { ...this.state };

  getActiveGoods = (): string => {
    const activeGoods = Object.keys(this.state).filter(goods => this.state[goods]);

    if (activeGoods.length) {
      const jointByAnd = activeGoods.splice(-2).join(' and ');
      const jointAll = activeGoods.concat(jointByAnd).join(', ');

      return jointByAnd.includes('and')
        ? jointAll.concat(' are selected')
        : jointAll.concat(' is selected');
    }

    return 'No goods selected';
  };

  changeGoodState = (good: GoodItem): void => {
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

  isSelectedGoodsExist = () => {
    return Object.values(this.state).find(stateItem => stateItem);
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
                  onClick={() => {
                    this.changeGoodState(good);
                  }}
                >
                  {!(this.state[good]) ? 'Add' : 'Remove'}
                </button>
              </li>
            );
          })}
        </ul>
        {this.isSelectedGoodsExist()
          && (<button type="button" onClick={this.clearSelection}>X</button>)}
      </div>
    );
  }
}

export default App;
