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

const changeButtonColor = (selectedGoods: string[], goodItem: string) => {
  let color = 'green';

  if (selectedGoods.includes(goodItem)) {
    color = 'red';
  }

  return color;
};

const changeListBackground = (selectedGoods: string[], goodItem: string) => {
  let color = '#9fff80';

  if (selectedGoods.includes(goodItem)) {
    color = '#ff8080';
  }

  return color;
};

interface State {
  selectedGoods: string[];
  isActive:boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    isActive: true,
  };

  createMessage = (
    goods: string[],
  ) => {
    const { length } = goods;

    switch (length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods.join(' and ')} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${
          goods[length - 1]
        } are selected`;
    }
  };

  addGood = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));

    this.state.isActive = true;
  };

  removeGood = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter((good) => good !== item),
    }));
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
    this.state.isActive = false;
  };

  hideClearButton = () => {
    if (this.state.selectedGoods.length <= 1) {
      this.state.isActive = false;
    }
  };

  render() {
    const { selectedGoods, isActive } = this.state;

    return (
      <div className="App container">
        <h1>
          {`${this.createMessage(this.state.selectedGoods)} `}
          {
            isActive
              && (
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => {
                    this.clear();
                  }}
                >
                  Clear
                </button>
              )
          }
        </h1>
        <hr />
        <br />
        <ul className="list-group">
          {
            goodsFromServer.map(item => {
              const buttonText = selectedGoods.includes(item)
                ? 'Remove'
                : 'Select';

              const addOrRemoveItem = () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if (selectedGoods.includes(item)) {
                  this.removeGood(item);
                } else {
                  this.addGood(item);
                }
              };

              return (
                <label
                  className="ListItem list-group-item"
                  key={item}
                >
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: changeListBackground(
                        selectedGoods, item,
                      ),
                    }}
                  >
                    {item}
                  </li>
                  <button
                    className="btn btn-success"
                    type="button"
                    style={{
                      backgroundColor: changeButtonColor(selectedGoods, item),
                      border: 0,
                    }}
                    onClick={() => {
                      this.hideClearButton();
                      addOrRemoveItem();
                      this.createMessage(this.state.selectedGoods);
                    }}
                  >
                    {buttonText}
                  </button>
                </label>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
