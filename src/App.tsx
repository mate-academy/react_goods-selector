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
  isActive:boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    isActive: false,
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

    this.state.isActive = false;
  };

  removeGood = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter((good) => good !== item),
    }));
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
    this.state.isActive = true;
  };

  hideClearButton = () => {
    if (this.state.selectedGoods.length <= 1) {
      this.state.isActive = true;
    }
  };

  render() {
    const { selectedGoods, isActive } = this.state;

    const showOrHideButton = isActive
      ? null
      : (
        <button
          className="btn btn-warning"
          type="button"
          onClick={() => {
            this.clear();
          }}
        >
          Clear
        </button>
      );

    return (
      <div className="App container">
        <h1>
          {this.createMessage(this.state.selectedGoods)}
          {'  '}

          {showOrHideButton}
        </h1>
        <hr />
        <br />
        <ul className="list-group">
          {
            goodsFromServer.map(item => {
              const buttonText = selectedGoods.includes(item)
                ? 'Remove'
                : 'Select';

              const handleClick = () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                selectedGoods.includes(item)
                  ? this.removeGood(item)
                  : this.addGood(item);
              };

              const changeButtonColor = (goodItem: string) => {
                let color = 'red';

                if (!this.state.selectedGoods.includes(goodItem)) {
                  color = 'green';
                }

                return color;
              };

              const changeListBackground = (goodItem: string) => {
                let color = '#ff8080';

                if (!this.state.selectedGoods.includes(goodItem)) {
                  color = '#9fff80';
                }

                return color;
              };

              return (
                <label
                  className="ListItem list-group-item"
                  key={item}
                  style={{
                    backgroundColor: changeListBackground(item),
                  }}
                >
                  <li
                    className="list-group-item"
                  >
                    {item}
                  </li>
                  <button
                    className="btn btn-success"
                    type="button"
                    style={{
                      backgroundColor: changeButtonColor(item),
                      border: 0,
                    }}
                    onClick={() => {
                      this.hideClearButton();
                      handleClick();
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
