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

export class App extends React.Component {
  state = {
    goodsList: goodsFromServer.map(good => ({
      title: good,
      isSelected: false,
    })),
  };

  ButtonIsSelected(title) {
    const newGoodsList = this.state.goodsList.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }

      return item;
    });

    this.setState(() => ({ goodsList: newGoodsList }));
  }

  clearList() {
    const newGoodsList = this.state.goodsList.map(item => ({
      ...item,
      isSelected: false,
    }));

    this.setState(() => ({ goodsList: newGoodsList }));
  }

  render() {
    const selectedList = this.state.goodsList
      .filter(item => item.isSelected === true)
      .map(item => item.title);

    return (
      <div className="App">
        <h1>
          {selectedList.length
            ? (
              <>
                {' '}
                {selectedList.join(', ')}
                {' '}
                are selected
                {' '}
                <button
                  type="button"
                  onClick={() => this.clearList()}
                >
                  {' '}
                  X
                </button>
              </>
            )
            : 'No goods selected'}
        </h1>
        <ul>
          {this.state.goodsList.map(item => (
            <li id={item.title}>
              <span>{item.title}</span>
              {item.isSelected ? (
                <button
                  type="button"
                  onClick={() => this.ButtonIsSelected(item.title)}
                >
                  remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => this.ButtonIsSelected(item.title)}
                >
                  add
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
