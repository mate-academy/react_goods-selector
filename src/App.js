import React from 'react';
import classNames from 'classnames/bind';
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
    goodsCheck: {},
  };

  removeGood = () => {
    this.setState({
      selectedGoods: [],
      goodsCheck: {},
    });
  };

  selectGood = (event, good, selectedGoods, goodsCheck) => {
    if (event.ctrlKey) {
      if (selectedGoods.includes(good)) {
        const includedGood = selectedGoods.indexOf(good);

        selectedGoods.splice(includedGood, 1);

        return this.setState({
          selectedGoods,
          goodsCheck: {
            ...goodsCheck,
            [good]: false,
          },
        });
      }

      return this.setState({
        selectedGoods: [...selectedGoods, good],
        goodsCheck: {
          ...goodsCheck,
          [good]: true,
        },
      });
    }

    return this.setState({
      selectedGoods: [good],
      goodsCheck: {
        [good]: true,
      },
    });
  };

  render() {
    const { selectedGoods, goodsCheck } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: ${selectedGoods.length > 0
            ? selectedGoods.join(', ')
            : '-'}`
          }
        </h1>
        <button
          type="button"
          onClick={this.removeGood}
        >
          &#88;
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                className={classNames({
                  selected: goodsCheck[good],
                })}
                onClick={(event) => {
                  this.selectGood(event, good, selectedGoods, goodsCheck);
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
