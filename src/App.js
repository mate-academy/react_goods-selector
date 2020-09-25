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
    selectedGoods: [],
  }

  electNextGoods = (e) => {
    const { selectedGoods } = this.state;

    if (e.ctrlKey) {
      this.setState({ selectedGoods: [...selectedGoods, e.target.innerHTML] });
    } else {
      this.setState({ selectedGoods: [e.target.innerHTML] });
    }
  }

  cleanSelectedItems = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    return (
      (
        <div className="App">
          <div className="title">
            <h1 className="titleH1">
              Selected good: -
              {' '}
              {this.state.selectedGoods.join(', ')}
            </h1>
            <button
              type="button"
              className={this.state.selectedGoods.length > 1
                ? 'btn active' : 'btn'}
              onClick={(event) => {
                this.cleanSelectedItems(event.target);
              }}
            >
              Clear selected
            </button>
          </div>
          <ul>
            {goodsFromServer.map(good => (
              <li>
                <button
                  type="button"
                  className={this.state.selectedGoods.includes(good)
                    ? 'itemInList selected' : 'itemInList'}
                  onClick={(event) => {
                    this.electNextGoods(event);
                  }}
                >
                  {good}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }
}
