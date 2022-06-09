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

export type ButtonColor = 'red' | 'green';

interface State {
  selectedGoods: string[];
  message: string;
  isActive:boolean;
  isSelect: boolean;
  color: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    message: 'Jam is selected',
    isActive: false,
    isSelect: true,
    color: 'green',
  };

  createMessage = (
    goods: string[],
  ) => {
    let selectedGoodsMessage = 'No goods selected';
    const selectedGoodsString = goods.join(', ');
    let lastIndexOfComma: number;
    const { length } = goods;

    switch (length >= 0) {
      case length === 0:
        this.state.isActive = true;
        this.state.color = 'green';

        return selectedGoodsMessage;
      case length === 1:
        selectedGoodsMessage = goods
          .toString()
          .concat(' is selected');
        this.state.isActive = false;
        break;
      case length === 2:
        selectedGoodsMessage = goods
          .join(' and ')
          .concat(' are selected');
        this.state.isActive = false;
        break;
      case length >= 3:
        lastIndexOfComma = selectedGoodsString.lastIndexOf(',');

        selectedGoodsMessage = `${selectedGoodsString
          .substring(0, lastIndexOfComma)} and
          ${selectedGoodsString
    .substring(lastIndexOfComma + 1)} are selected`;
        this.state.isActive = false;
        break;

      default:
        return 'No goods selected';
    }

    return selectedGoodsMessage;
  };

  updateSelectedGoods = (goodsList: string[], item: string) => {
    if (!goodsList.includes(item)) {
      goodsList.push(item);
      this.state.isSelect = false;
      this.state.color = 'red';
    } else {
      goodsList.splice(goodsList.indexOf(item), 1);
      this.state.isSelect = true;
      this.state.color = 'green';
    }

    return goodsList;
  };

  render() {
    const {
      selectedGoods,
      message,
      isActive,
      isSelect,
      color,
    } = this.state;

    const showOrHideButton = isActive
      ? null
      : (
        <button
          className="btn btn-warning"
          type="button"
          onClick={() => {
            selectedGoods.length = 0;
            this.setState({
              message: this.createMessage(selectedGoods),
            });
          }}
        >
          Clear
        </button>
      );

    const showSelectOrRemoveBtn = isSelect
      ? 'Select'
      : 'Remove';

    return (
      <div className="App container">
        <h1>
          {message}
          {'  '}

          {showOrHideButton}
        </h1>
        <hr />
        <br />
        <ul className="list-group">
          {
            goodsFromServer.map(item => (
              <label
                className="ListItem list-group-item"
                key={item}
              >
                <li
                  className="list-group-item"
                >
                  {item}
                </li>
                <button
                  className="btn"
                  type="button"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    this.setState({
                      selectedGoods: this.updateSelectedGoods(
                        selectedGoods, item,
                      ),
                    });
                    this.setState({
                      message: this.createMessage(selectedGoods),
                    });
                  }}
                >
                  {showSelectOrRemoveBtn}
                </button>
              </label>
            ))
          }
        </ul>
      </div>
    );
  }
}
