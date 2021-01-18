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
    selectedGoods: [],
  };

  selectItem = (item) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(item)) {
      const removeItem = selectedGoods.filter(product => product !== item);

      this.setState({ selectedGoods: removeItem });
    } else {
      this.setState({ selectedGoods: [...selectedGoods, item] });
    }
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGoods.join(', ')}
        </h1>

        <button
          type="button"
          className={classNames('button',
            selectedGoods.length === 0 ? 'hover' : '')}
          onClick={this.clear}
        >
          X
        </button>

        <ul className="list">
          {goodsFromServer.map(item => (
            <>
              <li
                key={item}
                className={classNames('list__item',
                  selectedGoods.includes(item) ? 'selected' : '')}
              >
                {item}
              </li>
              <button
                type="button"
                className="button"
                onClick={() => this.selectItem(item)}
              >
                {!selectedGoods.includes(item) ? 'Add' : 'Remove'}
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
