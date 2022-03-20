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

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  removeGood = (good: string) => {
    return () => {
      this.setState(state => (
        { selectedGoods: state.selectedGoods.filter(product => product !== good) }));
    };
  };

  addGood = (good: string) => {
    return () => {
      this.setState(state => ({ selectedGoods: [...state.selectedGoods, good] }));
    };
  };

  clear = () => {
    return () => {
      this.setState({ selectedGoods: [] });
    };
  };

  isSelected = (good: string) => {
    return this.state.selectedGoods.includes(good);
  };

  createH1Text() {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'no goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      default:
        return `${selectedGoods.slice(0, selectedGoods.length - 2).join(', ')}, ${selectedGoods[selectedGoods.length - 2]} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected goods: ${this.createH1Text()}`}
        </h1>
        <button
          type="button"
          onClick={this.clear()}
          className="button"
        >
          Clear
        </button>
        <ul className="goodsList">
          {goodsFromServer.map(good => (
            <>
              <li className={classNames('goodsList__item', { 'goodsList__item--selected': this.isSelected(good) })}>
                {good}
              </li>
              {this.isSelected(good)
                ? (
                  <button
                    type="button"
                    onClick={this.removeGood(good)}
                    className="button button--remove"
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={this.addGood(good)}
                    className="button button--add"
                  >
                    add
                  </button>
                )}
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

type Props = {};

type State = {
  selectedGoods: string[],
};
