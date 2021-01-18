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

let selectedGoodsArr = [];

export class App extends React.Component {
  state = {
    selectedGoodName: '',
  }

  separator = ' ----- ';

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {this.state.selectedGoodName}
        </h1>

        <button
          type="button"
          onClick={(event) => {
            selectedGoodsArr = [];
            this.setState(state => ({
              selectedGoodName: selectedGoodsArr
                .map(good => good
                  .innerText
                  .split(this.separator)[0])
                .join(', '),
            }));
            const items = [...document.body.querySelectorAll('.selected')];

            items.forEach(item => item.classList.remove('selected'));
          }}
        >
          Clear
        </button>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={this.state.itemClass}
            >
              {good}
              {this.separator}
              <button
                type="button"
                onClick={(event) => {
                  const selectedItem = event.target.parentElement;

                  if (selectedGoodsArr.includes(selectedItem)) {
                    return;
                  }

                  this.setState(state => ({
                    selectedGoodName: selectedGoodsArr
                      .map(item => item
                        .innerText
                        .split(this.separator)[0])
                      .join(', '),
                  }));
                  selectedGoodsArr.push(selectedItem);
                  selectedItem.className = 'selected';
                }}
              >
                Select
              </button>

              {this.separator}

              <button
                type="button"
                onClick={(event) => {
                  const selectedItem = event.target.parentElement;

                  if (selectedGoodsArr.includes(selectedItem)) {
                    selectedGoodsArr
                      .splice(selectedGoodsArr
                        .findIndex(item => event
                          .target
                          .parentElement === item)
                      , 1);

                    this.setState(state => ({
                      selectedGoodName: selectedGoodsArr
                        .map(item => item
                          .innerText
                          .split(this.separator)[0])
                        .join(', '),
                    }));
                  }

                  selectedItem.className = '';
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}
