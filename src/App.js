import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  clearSelection = () => {
    if (this.state.selectedGoods.length !== 0) {
      this.setState({
        selectedGoods: [],
      });
    }
  }

  clickHandler(good) {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(state => ({
        selectedGoods: state.selectedGoods.filter(elem => elem !== good),
      }));
    } else {
      this.setState((state) => {
        state.selectedGoods.push(good);

        return {
          selectedGoods: state.selectedGoods,

        };
      });
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          { `${selectedGoods.join(', ')} `}
          <button
            type="button"
            onClick={this.clearSelection}
          >
            Clear
          </button>
        </h1>
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                classNames({ selected: selectedGoods.includes(good) })}
            >
              {`${good}  - `}
              <button
                type="button"
                onClick={() => this.clickHandler(good)}
              >
                Add/Remove
              </button>
            </li>
          ))
          }
        </ul>

      </div>
    );
  }
}
