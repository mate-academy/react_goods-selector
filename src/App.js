/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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

export default class App extends React.Component {
  state = {
    countGoods: 0,
    nameGood: '',
    arrSelectedItem: [],
  }

  electNextGoods = (e) => {
    const button = document.querySelector('.btn');

    if (e.ctrlKey) {
      e.target.classList.toggle('electGood');
      this.state.arrSelectedItem.push(e.target);
      button.classList.add('active');
    } else {
      this.state.arrSelectedItem
        .forEach(item => item.classList.remove('electGood'));
      this.state.arrSelectedItem = [];
      e.target.classList.add('electGood');
      this.state.arrSelectedItem.push(e.target);
      this.setState(state => (state.arrSelectedItem));
    }
  }

  cleanSelectedItems = (button) => {
    this.state.arrSelectedItem
      .forEach(item => item.classList.remove('electGood'));
    button.classList.remove('active');
    this.state.nameGood = '';
    this.state.arrSelectedItem = [];
    this.setState(state => (state.nameGood));
  }

  render() {
    return (
      (
        <div className="App">
          <div className="title">
            <h1 className="titleH1">
              Selected good: -
              {' '}
              {this.state.nameGood}
            </h1>
            <button
              type="button"
              className="btn"
              onClick={(event) => {
                this.cleanSelectedItems(event.target);
              }}
            >
              Clear selected
            </button>

          </div>
          <ul>
            {goodsFromServer.map(good => (
              <li
                key={good}
                className="itemInList"
                tabIndex={this.state.countGoods++}
                onClick={(event) => {
                  this.state.nameGood = event.target.textContent;
                  this.electNextGoods(event);
                }}
              >
                {good}
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }
}
