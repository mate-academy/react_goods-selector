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

class App extends React.Component {
  state = {
    good: 'Jam',
  }

  render() {
    const { good } = this.state;

    return (
      <div className="goods">
        {good ? (
          <h1 className="goods__title">
            {good}
            {' '}
            is selected
            {' '}
            <button
              type="button"
              onClick={() => {
                this.setState({ good: null });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1 className="goods__title">
            No goods selected
          </h1>
        )
        }
        <ul className="goods__list">
          {goodsFromServer.map(goodFS => (
            <li
              key="goodFS"
              className={classNames(
                'goods__item',
                { active: good === goodFS },
              )
              }
            >
              {goodFS}
              {' '}
              {good !== goodFS && (
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    good: goodFS,
                  });
                }}
              >
                Select
              </button>
              )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
