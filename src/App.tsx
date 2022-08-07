import React, { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type Product = string;

type State = {
  selectedGood: Product,
  selectedGoods: Product[],
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    selectedGoods: ['Jam'],
  };

  onMouseClickRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedButton = event.currentTarget;
    const parentLi = clickedButton.closest('li');

    parentLi?.classList.remove('Good--active');
    const text = parentLi?.childNodes[0].nodeValue;

    if (text) {
      this.state.selectedGoods.forEach((item, i) => {
        if (item === text) {
          this.state.selectedGoods.splice(i, 1);
        }
      });
    }

    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood, selectedGoods } = this.state;
    let goodsToShow = '';
    const slicedWord = selectedGoods.slice(0, -1).join(', ');
    const word = `${slicedWord} and ${selectedGoods[selectedGoods.length - 1]}`;

    if (selectedGoods.length === 1) {
      goodsToShow += selectedGoods[0];
    } else if (selectedGoods.length === 2) {
      goodsToShow += `${selectedGoods[0]} and ${selectedGoods[1]}`;
    } else {
      goodsToShow += word;
    }

    return (
      <main className="App">
        <header className="App__header mt-4 mb-4">
          <h1 className="App__title">
            {selectedGoods.length === 0
              ? 'No goods selected'
              : `${goodsToShow} ${selectedGoods.length === 1
                ? 'is'
                : 'are'} selected`}
          </h1>

          {(selectedGoods.length > 0) && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={() => this.setState({
                selectedGood: '',
                selectedGoods: [],
              })}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="notification is-link">
          {goodsFromServer.map(product => (
            <li
              className={`pt-1 pb-1 Good ${(product === selectedGood) || (selectedGoods.includes(product))
                ? 'Good--active'
                : ''}`}
              key={product}
            >
              {product}
              {selectedGoods.includes(product)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={this.onMouseClickRemove}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-success"
                    onClick={() => {
                      selectedGoods.push(product);
                      this.setState({
                        selectedGood: product,
                      });
                    }}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
