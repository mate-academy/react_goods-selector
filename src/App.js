import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

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

const preparedGoods = goodsFromServer.map(good => (
  {
    name: good,
    selected: false,
    id: uuidv4(),
  }
));

class App extends React.Component {
  state = {
    goods: preparedGoods.map(good => (good.name === 'Jam' ? {
      ...good, selected: true,
    } : { ...good })),
    selectedGoods: ['Jam'],
  }

  addGood(good) {
    this.setState(prevState => ({
      goods: prevState.goods.map(item => (
        (item === good) ? {
          ...item, selected: true,
        } : { ...item })),
      selectedGoods: [...prevState.selectedGoods, good.name],
    }));
  }

  removeGood(good) {
    this.setState(prevState => ({
      goods: prevState.goods.map(item => (
        (item === good) ? {
          ...item, selected: false,
        } : { ...item }
      )),
      selectedGoods: prevState.selectedGoods.filter(item => item !== good.name),
    }));
  }

  removeSelectedGoods() {
    this.setState(prevState => ({
      goods: prevState.goods.map(item => ({
        ...item,
        selected: false,
      })),
      selectedGoods: [],
    }));
  }

  render() {
    const { selectedGoods, goods } = this.state;

    return (
      <div className="App d-flex flex-column align-items-center m-4">
        <h1>
          {selectedGoods.length > 0 ? 'Selected:' : 'No goods selected'}
          {' '}
          {selectedGoods.join(', ')}
        </h1>
        <button
          type="button"
          className="btn btn-danger m-3"
          onClick={() => {
            this.removeSelectedGoods();
          }
          }
        >
          Remove all
        </button>
        <ul className="list-group d-inline-flex">
          {goods.map(good => (
            <li
              className={`list-group-item  d-flex justify-content-evenly
                align-items-center p-4
                ${good.selected ? 'list-group-item-danger'
                : 'list-group-item-success'}`}
              key={good.id}
            >
              {good.name}
              {good.selected
                ? (
                  <button
                    onClick={() => {
                      this.removeGood(good);
                    }}
                    type="button"
                    className="btn btn-warning m-3"
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="btn btn-success m-3"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Add
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
