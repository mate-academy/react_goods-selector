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

  addItem = (goodsName, element) => {
    const buttonTextLength = element.textContent.length;

    if (element.textContent === 'delete') {
      this.removeItem(goodsName, buttonTextLength, element);

      return;
    }

    this.setState(state => ({
      goods: [...state.goods, goodsName.slice(0, -buttonTextLength)],
    }));

    // eslint-disable-next-line no-param-reassign
    element.textContent = 'delete';
  }

  removeItem = (goodsName, index, element) => {
    const indexOfGood = this.state.goods.indexOf(goodsName.slice(0, -index));

    this.state.goods.splice(indexOfGood, 1);

    this.setState(state => ({
      goods: [...state.goods],
    }));

    // eslint-disable-next-line no-param-reassign
    element.textContent = 'select';
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

        <button
          type="button"
          onClick={this.reset}
          className="App__button"
        >
          X
        </button>

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
                  onClick={(event) => {
                    const liElement = event.target.closest('li');

                    this.addItem(liElement.textContent, event.target);
                  }
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
