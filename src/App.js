import React from 'react';
import './App.css';

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
    selectedGood: 'No goods selected',
    selectedGoods: [],
  }

  clear = () => {
    const allLi = [...document.querySelectorAll('li')];
    const allButton = [...document.querySelectorAll('button')];

    this.setState({ selectedGood: 'No goods selected' });
    this.setState(state => ({ selectedGoods: [] }));
    for (let i = 0; i < allLi.length; i += 1) {
      allLi[i].style.color = 'black';
    }

    for (let i = 0; i < allButton.length; i += 1) {
      allButton[i].style.display = 'inline-block';
    }
  }

  remover = (item) => {
    const newSelectedGoods = this.state.selectedGoods.filter(x => x !== item);

    this.setState(state => ({ selectedGoods: newSelectedGoods }));

    const sumRemove = newSelectedGoods.join(', ');

    if (newSelectedGoods.length === 1) {
      this.setState(state => ({
        selectedGood: `${sumRemove} is selected`,
      }));
    } else if (newSelectedGoods.length === 0) {
      this.setState(state => ({
        selectedGood: 'No goods selected',
      }));
    } else {
      this.setState(state => ({
        selectedGood: `${sumRemove} are selected`,
      }));
    }

    document.querySelector(`#${item.slice(0, 1)}`).style.color = 'black';
    document.querySelector(`#${item.slice(0, 2)}`).style.display
      = 'inline-block';
  }

  adder = (item) => {
    this.state.selectedGoods.push(item);
    const sumAdd = this.state.selectedGoods.join(', ');

    if (this.state.selectedGoods.length === 1) {
      this.setState(state => ({
        selectedGood: `${sumAdd} is selected`,
      }));
    } else {
      this.setState(state => ({
        selectedGood: `${sumAdd} are selected`,
      }));
    }

    document.querySelector(`#${item.slice(0, 1)}`).style.color = 'green';
    document.querySelector(`#${item.slice(0, 2)}`).style.display = 'none';
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Shop</h1>
        <p>
          You choose:&nbsp;
          {this.state.selectedGood}
        </p>
        <p>
          {goodsFromServer.length - this.state.selectedGoods.length}
          &nbsp;goods yet!
        </p>
        <div>
          {goodsFromServer.map(item => (
            <li
              key={goodsFromServer.indexOf(item)}
              id={item.slice(0, 1)}
              type="button"
              className="product"
            >
              <>
                {item}
                <button
                  className="button is-success is-light"
                  id={item.slice(0, 2)}
                  onClick={() => this.adder(item)}
                  type="button"
                >
                  Add
                </button>
                {(this.state.selectedGoods.includes(item)) && (
                  <button
                    className="button is-warning"
                    onClick={() => this.remover(item)}
                    type="button"
                  >
                    Remove
                  </button>
                )}
              </>
            </li>
          ))}
        </div>
        {(this.state.selectedGood !== 'No goods selected') && (
          <button
            className="button is-danger"
            onClick={() => this.clear()}
            type="button"
          >
            X
          </button>
        )}
      </div>
    );
  }
}

export default App;
