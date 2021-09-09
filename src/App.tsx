import React from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

const goodsFromServer: string[] = [
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

type State = {
  goodsList: string[],
};

class App extends React.Component<{}, State> {
  state = {
    goodsList: ['Jam'],
  };

  selectItem = (item: string) => {
    this.setState((currentState) => ({
      goodsList: [...currentState.goodsList, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((currentState) => ({
      goodsList: [...currentState.goodsList.filter(good => good !== item)],
    }));
  };

  render() {
    const { goodsList } = this.state;
    const titleOneGood = `${goodsList.join(', ')} is selected`;
    const titleManyGoods = `${goodsList.join(', ')} are selected`;
    const titleFull = (goodsList.length > 1) ? titleManyGoods : titleOneGood;
    const titleEmpty = 'No goods selected';

    return (
      <div className="App">
        <h1 className="App__title alert alert-primary">
          {(goodsList.length === 0) ? titleEmpty : titleFull}
          {(goodsList.length !== 0) && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.setState({ goodsList: [] });
              }}
            >
              X
            </button>
          )}
        </h1>
        <ol className="goodsList list-group">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames(
                'goodsList__item alert alert-primary',
                {
                  'alert-success': this.state.goodsList.includes(good),
                },
              )}
            >
              {good}
              {
                (!goodsList.includes(good))
                  ? (
                    <button
                      type="button"
                      className="btn btn-success"
                      key={good}
                      onClick={() => {
                        this.selectItem(good);
                      }}
                    >
                      Add
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="goodsList__button btn btn-danger"
                      key={good}
                      onClick={() => {
                        this.removeItem(good);
                      }}
                    >
                      Remove
                    </button>
                  )
              }
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
