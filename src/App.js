import React from 'react';
import classNames from 'classnames';
import './App.scss';
import './list.scss';

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
    goods: ['Jam'],
  }

  addItem = (good) => {
    this.setState(state => ({
      goods: [...state.goods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      goods: state.goods.filter(item => item !== good),
    }));
  }

  resetGood = () => {
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
              onClick={this.resetGood}
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

                {this.state.goods.includes(good)
                  ? (
                    <button
                      type="button"
                      className={classNames(
                        'list__button',
                        { hidden: goods.includes(goodsFromServer[index]) },
                      )}
                      onClick={(() => {
                        this.removeGood(good);
                      })
                      }
                    >
                      delete
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className={classNames(
                        'list__button',
                        { hidden: goods.includes(goodsFromServer[index]) },
                      )}
                      onClick={(() => {
                        this.addItem(good);
                      })
                      }
                    >
                      select
                    </button>
                  )
                }
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
