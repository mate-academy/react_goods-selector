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

const preparedGoods = goodsFromServer.map((good, id) => ({
  good,
  id,
}));

export class App extends React.Component {
  state = {
    selectedGood: 'no item selected',
  }

  toRemoveSelection = () => {
    const selected = document.querySelector('.selected');

    if (!selected) {
      return;
    }

    selected.classList.remove('selected');
    this.setState({ selectedGood: 'no item selected' });
  }

  toSetSelection = (element) => {
    this.toRemoveSelection();

    if (!element.classList.contains('good')) {
      return;
    }

    element.classList.add('selected');
    this.setState({ selectedGood: element.textContent });
  }

  render() {
    return (
      <div className="App">
        <section className="heading">
          <h1>
            {'Selected good: - '}
            {this.state.selectedGood}
          </h1>

          <button
            className="heading__button"
            type="button"
            onClick={() => this.toRemoveSelection()}
          >
            X
          </button>
        </section>

        <ul
          className="goods"
        >
          {preparedGoods.map(item => (
            <li>
              <button
                key={item.id}
                type="button"
                className="good"
                onClick={event => this.toSetSelection(event.target)}
              >
                {item.good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
