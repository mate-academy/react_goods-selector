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
    goodsList: [],
    selectedGood: 'Jam',
  }

  close() {
    const selectedList = document.querySelectorAll('.selected');

    this.setState({ goodsList: [] });
    selectedList.forEach((item) => {
      item.classList.remove('selected');
      const good = item.querySelector('.goods-list__good-btn');

      good.innerText = 'Add';
    });
  }

  option(event, good) {
    const { target } = event;
    const item = target.closest('.goods-list__good');

    if (item.classList.contains('selected')) {
      const index = this.state.goodsList.findIndex(pos => pos === good);

      this.setState((prevState) => {
        const updatedList = [...prevState.goodsList];

        updatedList.splice(index, 1);

        return {
          ...prevState, goodsList: updatedList,
        };
      });

      item.classList.remove('selected');
      target.innerText = 'Add';
    } else {
      this.setState(prevState => ({
        ...prevState, goodsList: [...prevState.goodsList, good],
      }));

      item.classList.add('selected');
      target.innerText = 'Remove';
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
        <h1>
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
              className={`goods-list__good ${good}`}
            >
              {good}
              <button
                type="button"
                className="goods-list__good-btn"
                onClick={(event) => {
                  this.option(event, good);
                }}
                value="Add"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
