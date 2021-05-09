import React from 'react';
import ClassNames from 'classnames';
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
  };

  componentDidMount() {
    this.setState({
      selectedGoods: ['Jam'],
    });
  }

  addGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [
        ...selectedGoods,
        good,
      ],
    }));
  }

  removeGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(
        selectedGood => selectedGood !== good,
      ),
    }));
  }

  clearSelection = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  renderButton = (className, clickHandler, label) => (
    <button
      type="button"
      className={ClassNames('btn', className)}
      onClick={clickHandler}
    >
      {label}
    </button>
  )

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          {
            selectedGoods.length !== 0 && this.renderButton(
              'App__button App__button--clear',
              this.clearSelection.bind(this),
              'X',
            )
          }
          <h1 className="App__title">
            {
              selectedGoods.length !== 0
                ? `Selected goods: ${selectedGoods}`
                : 'No goods selected'
            }
          </h1>
        </header>
        <ul className="GoodsList">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={ClassNames(
                'GoodsList__item',
                selectedGoods.includes(good) && 'GoodsList__item--selected',
              )}
            >
              {good}
              {
                (
                  selectedGoods.includes(good)
                  && this.renderButton(
                    'GoodsList__button GoodsList__button--remove',
                    this.removeGood.bind(this, good),
                    'Remove',
                  )
                ) || (
                  this.renderButton(
                    'GoodsList__button GoodsList__button--add',
                    this.addGood.bind(this, good),
                    'Add',
                  )
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
