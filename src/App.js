/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  state = {
    goods: ['Jam'],
  }

  addItem = (goodsName) => {
    this.setState(state => ({
      goods: [...state.goods, goodsName],
    }));
  }

  removeItem = (goodsName) => {
    this.setState(state => ({
      goods: state.goods.filter(item => item !== goodsName),
    }));
  }

  reset = () => {
    this.setState({
      goods: [],
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">

        <h1 className="App__title">
          {goods.length > 0 ? 'Goods : ' : 'No goods selected'}
          {goods.join(',')}
        </h1>

        {goods.length > 0
          ? (
            <button
              type="button"
              onClick={this.reset}
              className="App__button"
            >
              X
            </button>
          )
          : null
        }

        <ul className="list">
          {goodsFromServer.map((good, index) => (
            <>
              <li
                className="list__item"
                key={`${index + 1}`}
              >
                {good}

                <button
                  type="button"
                  className={classNames(
                    'list__button',
                    { hidden: goods.includes(goodsFromServer[index]) },
                  )}
                  onClick={((event) => {
                    // eslint-disable-next-line no-unused-expressions
                    event.target.textContent === 'delete'
                      ? this.removeItem(good)
                      : this.addItem(good);
                  })
                }
                >
                  {this.state.goods.includes(good) ? 'delete' : 'select'}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
