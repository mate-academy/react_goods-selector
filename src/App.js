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

  addSelected = (el) => {
    if (this.state.selectedGoods.includes(el)) {
      return;
    }

    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, el],
    }));
  }

  deleteSelected = (el) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(product => product !== el),
    }));
  }

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  }

  setTitle = () => {
    let titleStr = '';
    const { selectedGoods } = this.state;
    const arr = selectedGoods.slice(0, -1);

    if (selectedGoods.length === 1) {
      titleStr = `${selectedGoods} is sellect`;
    }

    if (selectedGoods.length > 1) {
      // eslint-disable-next-line
      titleStr += `${arr.join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    if (selectedGoods.length === 0) {
      titleStr = 'No goods selected';
    }

    return titleStr;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="appWrapper">
        <h1 className="title">
          {this.setTitle()}
        </h1>
        <ul className="goodsList">
          {goodsFromServer.map((el) => {
            const isSelected = this.state.selectedGoods.includes(el);

            return (
              <li
                key={el}
                className={isSelected ? 'selectedEl' : 'unselectedEl'}
              >
                {el}
                {isSelected
                  ? (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.deleteSelected(el)}
                    >
                      ✖
                    </button>
                  )
                  : (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.addSelected(el)}
                    >
                      ✚
                    </button>
                  )
                }
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0
          ? (
            <button
              className="clearBtn"
              type="button"
              onClick={this.clearSelected}
            >
              Clear all
            </button>
          )
          : null
        }
      </div>
    );
  }
}

export default App;
