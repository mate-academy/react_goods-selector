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
    selectedGoods: [],
  }

  addSelectedGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, goods],
    });
  }

  removeSelectedGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(el => el !== goods),
    });
  }

  deleteSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;
    const {
      addSelectedGoods,
      removeSelectedGoods,
      deleteSelectedGoods,
    } = this;

    return (
      <div className="app">
        <h1 className="title">Internet-shop</h1>
        <ul className="list">
          {goodsFromServer.map(product => (
            <li key={product} className="list__item">
              <span className={
                classNames(`list__text`, {
                  list__active: selectedGoods.includes(product),
                })}
              >
                { product }
              </span>
              <section className="list__btn btn">
                <button
                  className="btn__select add-remove"
                  type="button"
                  onClick={() => {
                    addSelectedGoods(product);
                  }}
                >
                  Select
                </button>
                <button
                  className="btn__remove add-remove"
                  type="button"
                  onClick={() => {
                    removeSelectedGoods(product);
                  }}
                >
                  Remove
                </button>
              </section>
            </li>
          ))}
        </ul>

        <section className="products">
          <p className="products__count">
            {`Selected:
            ${selectedGoods.length}`}
          </p>
          {selectedGoods.length > 1 && (
            <button
              type="button"
              className="products__delete"
              onClick={deleteSelectedGoods}
            >
              Х
            </button>
          )}
        </section>
        <section className="text">
          <div className="text__inner">
            <strong className="text__title">Selected goods:</strong>
            <span className="text__col">
              {`${selectedGoods.join(', ')}`}
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
