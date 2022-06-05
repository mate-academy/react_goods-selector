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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  handleClick = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState((state) => ({
        selectedGoods: state.selectedGoods
          .filter(el => el !== good),
      }));
    } else {
      this.setState((state) => ({
        selectedGoods: [...state.selectedGoods, good],
      }));
      // eslint-disable-next-line no-console
      console.log(this.state.selectedGoods);
    }
  };

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  checkGoods = (goods: string[]) => {
    switch (goods.length) {
      case 0:
        return 'No selected good';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods.join(' and ')} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="container">
        <h1 className="h1 text-primary">
          Selected goods:
          <p className="h2 text-danger">{this.checkGoods(selectedGoods)}</p>
          <button
            type="button"
            className="btn-default"
            onClick={this.clearGoods}
          >
            Clear all
          </button>
        </h1>
        <ul className="list-group">
          {goodsFromServer.map((good) => (
            <li className="list-group-item" key={good}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  this.handleClick(good);
                }}
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Select'}
              </button>
              <span className="item">
                {good}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
