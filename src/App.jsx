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
    const { selectedGoods } = this.state;

    if (!selectedGoods.includes(good)) {
      this.setState({ selectedGoods: [...selectedGoods, good] });
    }
  };

  removeGood = (good) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      this.setState({
        selectedGoods: selectedGoods.filter(item => item !== good),
      });
    }
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
          <table className="goods">
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
    );
  }
}

export default App;
