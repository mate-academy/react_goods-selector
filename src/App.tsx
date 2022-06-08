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

interface State {
  selectedGoods: string[];
  message: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    message: 'Jam is selected',
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
        return selectedGoodsMessage;
      case length === 1:
        selectedGoodsMessage = goods
          .toString()
          .concat(' is selected');
        break;
      case length === 2:
        selectedGoodsMessage = goods
          .join(' and ')
          .concat(' are selected');
        break;
      case length >= 3:
        lastIndexOfComma = selectedGoodsString.lastIndexOf(',');

        selectedGoodsMessage = `${selectedGoodsString
          .substring(0, lastIndexOfComma)} and
          ${selectedGoodsString
    .substring(lastIndexOfComma + 1)} are selected`;
        break;

      default:
        return 'No goods selected';
    }

    return selectedGoodsMessage;
  };

  updateSelectedGoods = (goodsList: string[], item: string) => {
    if (!goodsList.includes(item)) {
      goodsList.push(item);
    } else {
      goodsList.splice(goodsList.indexOf(item), 1);
    }

    return goodsList;
  };

  render() {
    const { selectedGoods, message } = this.state;

    return (
      <div className="App container">
        <h1>
          {message}
          {'  '}

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
        </h1>
        <hr />
        <br />
        <ul className="list-group">
          {
            goodsFromServer.map(item => (
              <>
                <label className="ListItem list-group-item">
                  <li
                    className="list-group-item"
                    key={item}
                  >
                    {item}
                  </li>
                  <button
                    className="btn btn-primary"
                    type="button"
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
                    Select
                  </button>
                </label>
              </>
            ))
          }
        </ul>
      </div>
    );
  }
}
