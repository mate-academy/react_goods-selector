import React from 'react';
import classNames from 'classnames';
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
    goodsList: [],
    selectedGood: 'Jam',
  }

  close() {
    this.setState({ goodsList: [] });
  }

  option(good) {
    if (this.state.goodsList.includes(good)) {
      const index = this.state.goodsList.findIndex(pos => pos === good);

      this.setState((prevState) => {
        const updatedList = [...prevState.goodsList];

        updatedList.splice(index, 1);

        return {
          ...prevState, goodsList: updatedList,
        };
      });
    } else {
      this.setState(prevState => ({
        ...prevState, goodsList: [...prevState.goodsList, good],
      }));
    }
  }

  render() {
    const { goodsList } = this.state;
    let selectedItems;

    if (goodsList.length) {
      if (goodsList.length === 1) {
        selectedItems = `${goodsList.join(', ')} is selected`;
      } else {
        selectedItems = `${goodsList.join(', ')} are selected`;
      }
    } else {
      selectedItems = 'No goods selected';
    }

    return (
      <div className="App">
        <h1 className="title">
          {selectedItems}
          <button
            type="button"
            className="close"
            onClick={() => {
              this.close();
            }}
          >
            X
          </button>
        </h1>
        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                classNames(`goods-list__good ${good}`,
                  { selected: this.state.goodsList.includes(good) })
              }
            >
              {good}
              <button
                type="button"
                className={
                  classNames('goods-list__good-btn',
                    { 'selected-btn': this.state.goodsList.includes(good) })
                  }
                onClick={() => {
                  this.option(good);
                }}
              >
                {this.state.goodsList.includes(good) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
