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

// document.addEventListener('keydown', function (event) {
//   if (event.target.tagName == "BUTTON") {
//     console.log(56456)
//     const arr =[];
//     arr.push(event.target)
//   }
// })
class App extends React.Component {
  state = {
    selectedGoods: '-',
    elem: '',
  }

  selectedElement;

  onSelect = (event) => {
    this.setState({
      selectedGoods: event.target.textContent,
      elem: event.target.textContent,
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGoods}
        </h1>
        {goodsFromServer.map(item => (
          <button
            type="button"
            className={this.state.elem === item ? 'selected' : ''}
            onClick={this.onSelect}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            this.setState({
              selectedGoods: '-',
            });
            const cleared = document.querySelector('.selected');

            cleared.className = '';
          }
          }
        >
          X
        </button>
      </div>
    );
  }
}

export default App;
