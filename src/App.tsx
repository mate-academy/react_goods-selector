import React from 'react';
import classNames from 'classnames';
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

  getSelectedGoods = (): string => {
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

  clearSelection = (): void => {
    this.setState({
      ...this.initialState,
    });
  };

  isSelectedGoodsExist = (): boolean => {
    return Object.values(this.state).find(stateItem => stateItem) || false;
  };

  render() {
    return (
      <div className="App">
        <h1>{this.getSelectedGoods()}</h1>
        <ul className="goods-list">
          {goodsFromServer.map(good => {
            return (
              <li
                className={classNames({
                  'goods-list__item': true,
                  'goods-list__item--active': this.state[good],
                })}
              >
                <span>{good}</span>
                {' '}
                <button
                  type="button"
                  onClick={() => {
                    this.changeGoodState(good);
                  }}
                >
                  {!this.state[good] ? 'Add' : 'Remove'}
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
