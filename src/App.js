import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goods: goodsFromServer.map(good => ({
      name: good, selected: false,
    })),
  };

  changeStatus = (index) => {
    this.setState((state) => {
      const copy = [...state.goods];

      copy[index].selected = !copy[index].selected;

      return { goods: copy };
    });
  };

  getSelected = () => {
    const selected = this.state.goods.filter(good => good.selected)
      .map(good => good.name);

    if (selected.length === 0) {
      return 'No goods selected';
    }

    if (selected.length === 1) {
      return selected[0];
    }

    return (
      `${selected.slice(0, -1).join(', ')} and ${
        selected[selected.length - 1]}`);
  };

  clearSelected = () => {
    this.setState(state => ({
      goods: state.goods.map(good => ({
        ...good, selected: false,
      })),
    }));
  };

  render() {
    const { goods } = this.state;
    const selectedGoods = this.getSelected();

    return (
      <div className="app">
        <div className="selectedTitleWrapper">
          <h1>{selectedGoods}</h1>
          {selectedGoods !== 'No goods selected' && (
            <button
              type="button"
              className="clearAllBtn"
              title="Clear selected"
              onClick={this.clearSelected}
            >
              x
            </button>
          )}
        </div>
        <ul className="list">
          {goods.map(({ name, selected }, index) => (
            <li key={name} className="list_item">
              <h2 className="item_title">{name}</h2>
              <button
                type="button"
                onClick={() => this.changeStatus(index)}
                className={classNames('item_btn', { selected })}
              >
                {selected ? '➖' : '➕'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
