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
  };

  addSelected = (element) => {
    if (this.state.selectedGoods.includes(element)) {
      return;
    }

    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, element],
    }));
  };

  deleteSelected = (element) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(goods => goods !== element),
    }));
  };

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  renderTitle = () => {
    let titleStr = '';
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 1) {
      titleStr = `${selectedGoods} is sellect`;
    }

    if (selectedGoods.length > 1) {
      titleStr += `${selectedGoods.slice(0, -1).join(', ')}
      and ${selectedGoods[selectedGoods.length - 1]}
      are selected`;
    }

    if (selectedGoods.length === 0) {
      titleStr = 'No goods selected';
    }

    return titleStr;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="wrapper">
        <h1 className="title">
          {this.renderTitle()}
          {selectedGoods.length > 0
            ? (
              <button
                className="clearButton"
                type="button"
                onClick={() => this.clearSelected()}
              >
                Clear
              </button>
            )
            : null
          }
        </h1>

        <ul className="goodsList">
          {goodsFromServer.map((element) => {
            const selected = selectedGoods.includes(element);

            return (
              <li
                key={element}
                className={selected ? 'active' : 'normal'}
              >
                {element}
                {selected
                  ? (
                    <button
                      className="button"
                      type="button"
                      onClick={() => this.deleteSelected(element)}
                    >
                      X
                    </button>
                  )
                  : (
                    <button
                      className="button"
                      type="button"
                      onClick={() => this.addSelected(element)}
                    >
                      +
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
