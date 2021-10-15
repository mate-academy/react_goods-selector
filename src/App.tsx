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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectHandler = (item: string) => {
    const { selectedGoods } = this.state;
    const copy = [...selectedGoods, item];

    this.setState({ selectedGoods: copy });
  };

  removeSelectHandler = (item: string) => {
    const { selectedGoods } = this.state;
    const index = selectedGoods.indexOf(item);
    const copy = [...selectedGoods];

    copy.splice(index, 1);

    this.setState({ selectedGoods: copy });
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return ' No goods selected';
    }

    if (selectedGoods.length > 1) {
      const lastItem = selectedGoods[selectedGoods.length - 1];
      const copy = [...selectedGoods];

      copy.pop();

      return ` ${copy.join(', ')} and ${lastItem} are selected`;
    }

    return ` ${selectedGoods} is selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__list">
          Selected good:
          {this.showSelectedGoods()}
        </h1>
        <button
          title="Clear list of selected goods"
          type="button"
          className={selectedGoods.length > 0
            ? 'app__clear' : 'app__clear--none'}
          onClick={this.clearList}
        >
          ❌ Clear List
        </button>

        {goodsFromServer.map((item) => {
          const flag = selectedGoods.includes(item);
          const cls = flag ? 'app__item app__item--selected' : 'app__item';

          return (
            <div className="app__container" key={item}>
              <div className={cls}>{item}</div>
              <input
                type="button"
                className="app__btn"
                onClick={() => {
                  if (flag) {
                    this.removeSelectHandler(item);
                  } else {
                    this.selectHandler(item);
                  }
                }}
                value={flag ? 'Remove' : 'Add'}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
