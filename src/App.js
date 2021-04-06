import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
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

const preparedGoods = goodsFromServer.map(good => (
  {
    name: good,
    selected: false,
    id: uuidv4(),
  }
));

class App extends React.Component {
  state = {
    goods: preparedGoods.map(good => (good.name === 'Jam'
      ? {
        ...good, selected: true,
      }
      : { ...good })),
    selectedGoods: ['Jam'],
  }

  addGood = (good) => {
    this.setState(prevState => ({
      goods: prevState.goods.map(item => (item === good
        ? {
          ...item, selected: true,
        }
        : { ...item })),
      selectedGoods: [...prevState.selectedGoods, good.name],
    }));
  }

  removeGood = (good) => {
    this.setState(prevState => ({
      goods: prevState.goods.map(item => (item === good
        ? {
          ...item, selected: false,
        }
        : { ...item })),
      selectedGoods: prevState.selectedGoods.filter(item => item !== good.name),
    }));
  }

  removeSelectedGoods = () => {
    this.setState(prevState => ({
      goods: prevState.goods.map(item => ({
        ...item,
        selected: false,
      })),
      selectedGoods: [],
    }));
  }

  showTitle = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is  selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}
      and ${selectedGoods.slice(-1)} are selected`;
  }

  render() {
    const { selectedGoods, goods } = this.state;
    const title = this.showTitle();

    return (
      <div className="App d-flex flex-column align-items-center m-4">
        <h1 className="text-center">
          {title}
        </h1>
        {selectedGoods.length > 0
          ? (
            <p>
              Number of selected goods:
              {' '}
              {selectedGoods.length}
            </p>
          )
          : ''
        }
        {selectedGoods.length > 0
          ? (
            <button
              type="button"
              className="btn btn-danger m-3"
              onClick={this.removeSelectedGoods}
            >
              Remove all
            </button>
          )
          : ''
        }
        <ul className="list-group  d-flex flex-row flex-wrap">
          {goods.map(good => (
            <li
              key={good.id}
              className={classNames('list-group-item', 'd-flex', 'flex-grow-1',
                'm-3', 'justify-content-evenly',
                'align-items-center', 'p-4', 'shadow', {
                  'list-group-item-danger': good.selected,
                  'list-group-item-success': !good.selected,
                })}
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
