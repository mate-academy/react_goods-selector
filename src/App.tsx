import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  }; 

  componentDidMount() {
    this.state.selectedGoods.forEach(good => {
      document.getElementById(`${good}`)?.classList.add('active');
    });
  }

  clear = () => {
    const items = document.querySelectorAll('.item');

    items.forEach(el => {
      el.classList.remove('active');
    });

    this.setState({ selectedGoods: [] });
  };

  message = () => {
    const { selectedGoods } = this.state;
    if (selectedGoods.length < 1) {
      return 'No goods selected';
    }

    if (selectedGoods.length < 2) {
      return selectedGoods;
    }

    return selectedGoods.slice(0, -1).join(', ').concat(' and ').concat() + selectedGoods.slice(-1);
  };

  selectOrRemove = (good: string) => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState((prev) => {
        return { selectedGoods: [...prev.selectedGoods, good] };
      });

      return;
    }

    this.setState((prev) => {
      const result = prev.selectedGoods.filter(el => el !== good);

      return { selectedGoods: result };
    });
    document.getElementById(`${good}`)?.classList.remove('active');
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected goods: -&nbsp;
          {this.message()}
        </h1>
        {selectedGoods.length > 0 && (
          <button
            className="button button--reset"
            type="button"
            value="button"
            onClick={this.clear}
          >
            Clear All
          </button>
        )}
        <ul className="list">
          {goodsFromServer.map((good) => {
            return (
              <li
                id={good}
                key={good}
                className={`item ${selectedGoods.includes(good) ? 'active' : ''}`}
              >
                {good}
                <button
                  className="button button--toggler"
                  type="button"
                  value="button"
                  onClick={() => {
                    this.selectOrRemove(good);
                  }}
                >
                  {selectedGoods.includes(`${good}`) ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
