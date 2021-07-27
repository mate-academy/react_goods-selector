import React from 'react';
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
    selectedGoods: 'Jam',
  };

  saveHandler = (goods) => {
    this.setState({ selectedGoods: goods });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {selectedGoods
            ? (` ${selectedGoods} is selected `)
            : (` No goods selected `)
          }
          <button
            className={
              selectedGoods
                ? 'enable btn btn-info'
                : 'disable btn'
            }
            type="button"
            onClick={() => {
              this.saveHandler('');
            }}
          >
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(goods => (
            <li
              className={
                    goods === selectedGoods
                      ? 'alert alert-danger'
                      : 'alert alert-success'
                  }
            >
              {`${goods} `}
              <button
                className={
                        goods !== selectedGoods
                          ? 'enable btn btn-info'
                          : 'disable btn'
                      }
                type="button"
                onClick={() => {
                  this.saveHandler(goods);
                }}
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
