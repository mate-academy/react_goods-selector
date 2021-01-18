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
    selectedGoods: [],
  }

  select = (e) => {
    const { selectedGoods } = this.state;
    const selectedElement = e.target.parentElement;

    selectedElement.classList.add('selected');
    selectedGoods.push(selectedElement.innerText.split(' ')[0]);

    this.setState({ selectedGoods });
  }

  clear = (e) => {
    const { selectedGoods } = this.state;
    const elementToRemove = e.target.parentElement;
    const index = selectedGoods
      .indexOf(elementToRemove.innerText.split(' ')[0]);

    elementToRemove.classList.remove('selected');
    selectedGoods.splice(index, 1);

    this.setState({ selectedGoods });
  }

  clearAll = () => {
    const elementsToRemove = [...document.querySelectorAll('.selected')];

    elementsToRemove.map(element => element.classList.remove('selected'));
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {selectedGoods.join(', ')}
        </h1>
        <button type="button" onClick={this.clearAll}>Clear</button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li className="list__item" key={good}>
              {good}
              {' '}
              <button
                className="button"
                type="button"
                onClick={this.select}
              >
                Add
              </button>
              <button
                className="button"
                type="button"
                onClick={this.clear}
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
