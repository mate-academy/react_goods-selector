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

    this.setState({ selectedGoods: ['No goods selected'] });
  };

  message = () => {
    if (this.state.selectedGoods.length < 1) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length < 2) {
      return this.state.selectedGoods;
    }

    return this.state.selectedGoods.slice(0, -1).join(', ').concat(' and ').concat() + this.state.selectedGoods.slice(-1);
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected goods: -&nbsp;
          {this.message()}
        </h1>

        <button
          className="button button--reset"
          type="button"
          value="button"
          onClick={this.clear}
        >
          Clear All
        </button>
        <ul className="list">
          {goodsFromServer.map(good => {
            return (
              <>
                <li
                  id={good}
                  className="item"
                >
                  {good}
                  <button
                    className="button button--toggler"
                    type="button"
                    value="button"
                    onClick={
                      this.state.selectedGoods.indexOf(`${good}`) < 0
                        ? () => {
                          this.setState((prev) => {
                            let result = [...prev.selectedGoods, good];

                            result = result.filter(el => el !== 'No goods selected');
                            document.getElementById(`${good}`)?.classList.add('active');

                            return { selectedGoods: result };
                          });
                        }
                        : () => {
                          this.setState((prev) => {
                            const result = prev.selectedGoods.filter(el => el !== good);

                            return { selectedGoods: result };
                          });
                          document.getElementById(`${good}`)?.classList.remove('active');
                        }
                    }
                  >
                    {this.state.selectedGoods.indexOf(`${good}`) < 0 ? 'Select' : 'Remove'}
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
