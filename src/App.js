import React from 'react';
import { Clear, Remove, Add } from './Controls';
import { Good } from './Good';
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
    selectedGoods: ['Jam'],
  }

  add = (event) => {
    const good = event.target.previousSibling.textContent;

    this.setState(({ selectedGoods }) => {
      selectedGoods.push(good);

      return {
        selectedGoods,
      };
    });
  }

  remove = (event) => {
    const good = event.target.previousSibling.textContent;

    this.setState(({ selectedGoods }) => {
      const index = selectedGoods.findIndex(selectedGood => (
        selectedGood === good
      ));

      selectedGoods.splice(index, 1);

      return {
        selectedGoods,
      };
    });
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    let userSelection = 'No goods selected';

    if (selectedGoods.length === 1) {
      userSelection = `${selectedGoods[0]} is selected`;
    } else if (selectedGoods.length > 1) {
      userSelection = selectedGoods
        .slice(0, selectedGoods.length - 1)
        .join(', ');
      userSelection += ` and ${selectedGoods[selectedGoods.length - 1]}`;
      userSelection += ' are selected';
    }

    return (
      <div className="App">
        <h1>
          {userSelection}
          {selectedGoods.length !== 0
            ? <Clear clear={this.clear} app={this} />
            : ''}
        </h1>
        {goodsFromServer.map((good) => {
          const selected = selectedGoods.includes(good);

          return (
            <div
              key={good}
              className={`container ${
                selected ? 'selected' : ''}`}
            >
              <Good good={good} />
              {selected
                ? <Remove remove={this.remove} app={this} />
                : <Add add={this.add} app={this} />
            }
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
