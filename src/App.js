import React from 'react';
import './App.scss';
import '../node_modules/bulma/css/bulma.min.css';

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
    goods: [],
  };

  check = (goods) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return (
        <>
          {goods}
          {' '}
          is selected
        </>
      );
    }

    return (
      <>
        {goods.join(', ')}
        {' '}
        are selected
      </>
    );
  }

  add = (product) => {
    this.setState(state => ({
      goods: [
        ...state.goods,
        product,
      ],
    }));
  }

  remove = (product) => {
    this.setState(state => (
      state.goods.includes(product)
      && state.goods.splice(state.goods.indexOf(product), 1)
    ));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title title is-2">Selected goods</h1>
        <div className="App__order title is-4">{this.check(goods)}</div>
        <button
          className="App__button button is-danger is-outlined"
          type="button"
          onClick={() => {
            this.setState(() => (
              goods.length = 0
            ));
          }}
        >
          &times;
        </button>
        <ul className="App__list">
          {goodsFromServer.map(product => (
            <li className="App__item">
              {goods.includes(product)
                ? <span className="App__text App__text--active">{product}</span>
                : <span className="App__text">{product}</span>
              }
              <button
                className="App__button button is-primary is-outlined"
                type="button"
                onClick={() => {
                  this.add(product);
                }}
              >
                add
              </button>
              <button
                className="App__button button is-link is-outlined"
                type="button"
                onClick={() => {
                  this.remove(product);
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
