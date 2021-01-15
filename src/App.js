/* eslint-disable object-curly-newline */
import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
  { id: 1, name: 'Dumplings' },
  { id: 2, name: 'Carrot' },
  { id: 3, name: 'Eggs' },
  { id: 4, name: 'Ice cream' },
  { id: 5, name: 'Apple' },
  { id: 6, name: 'Bread' },
  { id: 7, name: 'Fish' },
  { id: 8, name: 'Honey' },
  { id: 9, name: 'Jam' },
  { id: 10, name: 'Garlic' },
];

export class App extends React.Component {
  state= {
    list: [],
    selectedId: [],
  }

  selectItem = (id, name) => {
    if (!this.state.selectedId.includes(id)) {
      this.setState(prevState => ({ list: [...prevState.list, name] }));
      this.setState(
        prevState => ({ selectedId: [...prevState.selectedId, id] }),
      );
    } else {
      this.setState(prevState => ({ list: prevState.list }));
      this.setState(prevState => ({ selectedId: prevState.selectedId.filter(
        good => good !== id,
      ),
      }));
      this.deleteGoods(name);
    }
  }

  deleteGoods = (item) => {
    this.setState(prevState => ({ list: prevState.list.filter(
      good => good !== item,
    ) }));
  }

  clearGoods = () => {
    this.setState({
      list: [],
      selectedId: [],
    });
  }

  render() {
    return (
      <div className="App">
        <button
          className="button is-danger is-rounded is-small"
          type="button"
          onClick={this.clearGoods}
        >
          X
        </button>
        <h1>
          {`Selected good: ${this.state.list}`}
        </h1>
        <ul>
          {goodsFromServer.map(item => (
            <li
              className={classNames('good',
                { selected: this.state.selectedId.includes(item.id) })}
              key={item.id}
            >
              <span>{item.name}</span>
              <button
                className="button is-primary is-light is-small"
                type="button"
                onClick={() => this.selectItem(item.id, item.name)}
              >
                Add/Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
