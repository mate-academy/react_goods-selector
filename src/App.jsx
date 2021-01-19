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
  };

  selectGood = (good) => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState(state => ({
        selectedGoods: [...state.selectedGoods, good],
      }));
    }
  };

  removeGood = (good) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(state => ({
        selectedGoods: state.selectedGoods.filter(item => item !== good),
      }));
    }
  };

  removeAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="page-title">
            {`Selected goods:
            ${selectedGoods.length === 0 ? '-' : selectedGoods.join(', ')}`}
          </h1>
          <div className="goods">
            <div className="goods__remove">
              <button
                type="button"
                className="goods__button goods__button--remove"
                onClick={this.removeAll}
              >
                X
              </button>
            </div>
            <table className="goods__table">
              <tbody>
                {goodsFromServer.map(good => (
                  <tr
                    key={good}
                    className={selectedGoods.includes(good) ? 'goods__item goods__item--selected' : 'goods__item'}
                  >
                    <td>{good}</td>
                    <td>
                      <button
                        type="button"
                        className="goods__button goods__button--select"
                        onClick={(event) => {
                          this.selectGood(good);
                        }}
                      >
                        Add
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="goods__button goods__button--remove"
                        onClick={(event) => {
                          this.removeGood(good);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
