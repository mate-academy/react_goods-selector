import React from 'react';
import './App.scss';

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
    selectedGoods: ['Jam'],
  }

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  }

  addSelected = (item) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, item],
    }));
  }

  deleteSelected = (item) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(product => product !== item),
    }));
  }

  setTitle = () => {
    let str = '';
    const { selectedGoods } = this.state;
    const arr = selectedGoods.slice(0, -1);

    if (selectedGoods.length === 1) {
      str = `${selectedGoods} is sellect`;
    } else if (selectedGoods.length > 1) {
      // eslint-disable-next-line
      str += `${arr.join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    } else {
      str = 'No goods selected';
    }

    return str;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.setTitle()}
          {selectedGoods.length > 0 && (
          <button
            type="button"
            onClick={this.clearSelected}
            className="clear"
          >
            X
          </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map((item) => {
            const isSelected = this.state.selectedGoods.includes(item);

            return (
              <li
                key={item}
                className={isSelected ? 'item selected' : 'item notSelected'}
              >
                {item}
                {isSelected
                  ? (
                    <button
                      type="button"
                      onClick={() => this.deleteSelected(item)}
                    >
                      remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => this.addSelected(item)}
                    >
                      select
                    </button>
                  )
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
