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

class App extends React.Component {
  state = {
    selectedId: null,
  }

  cleaner = () => {
    this.setState({ selectedId: null });
  }

  selected = (id) => {
    this.setState({ selectedId: id });
  }

  render() {
    const { selectedId } = this.state;
    const showGood = goodsFromServer.find(good => good.id === selectedId);

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {showGood ? showGood.name : ''}
        </h1>
        {goodsFromServer.length}
        <br />
        <br />

        <button
          type="button"
          onClick={this.cleaner}
        >
          Clear
        </button>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good.id}
            >
              <span className={classNames({ yellow: selectedId === good.id })}>
                {good.name}
              </span>
              <span>{` `}</span>
              <button
                className="product-button"
                type="button"
                onClick={() => this.selected(good.id)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
