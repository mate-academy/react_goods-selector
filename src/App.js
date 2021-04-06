import React from 'react';
import './App.scss';
import 'bulma';

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
  }

  addGood = (good) => {
    const { goods } = this.state;

    this.setState({
      goods: [...goods, good],
    });
  }

  removeGood = (good) => {
    const { goods } = this.state;

    this.setState({
      goods: goods.filter(elemet => elemet !== good),
    });
  }

  deleteGoods = () => {
    this.setState({
      goods: [],
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="title">Selected good</h1>
        {(goods.length === 0) && (
          <div>
            No goods selected
          </div>
        )}
        {(goods.length === 1) && (
          <div>
            {`${goods} is selected`}
          </div>
        )}
        {(goods.length > 1) && (
          <div>
            {`${goods.join(', ')} are selected`}
          </div>
        )}
        <button
          className="button is-light is-danger"
          type="button"
          onClick={() => {
            this.setState({
              goods: [],
            });
          }}
        >
          x
        </button>
        <ul className="app__list">
          {goodsFromServer.map(product => (
            <li className="app__item">
              <span className="tag is-large">{`${product}: `}</span>

              <button
                className="app__button button is-light is-success"
                type="button"
                onClick={() => {
                  this.addGood(product);
                }}
              >
                Add
              </button>
              <button
                className="app__button  button is-light is-danger"
                type="button"
                onClick={() => {
                  this.removeGood(product);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
