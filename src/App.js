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

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  showSelectedGood = (event) => {
    const { target } = event;

    target.classList.toggle('selected');

    this.setState({
      selectedGoods: [target.textContent],
    });
  }

  handleSelectedGood = (event) => {
    const good = event.target.previousSibling;

    const arrayOfGoods = this.state.selectedGoods;

    if (arrayOfGoods.includes(good.textContent) && arrayOfGoods.length > 0) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(item => (
          item !== good.textContent
        )),
      }));
    }

    if (!arrayOfGoods.includes(good.textContent)) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.concat(good.textContent),
      }));
    }
  }

  handleClearSelected = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <>
        <h1>
          {!selectedGoods.length
            ? 'No goods selected'
            : `${selectedGoods} in basket`
          }
        </h1>
        {selectedGoods.length > 0 && (
        <button type="button" onClick={this.handleClearSelected}>
          X
        </button>
        )}
        <ul>
          {goodsFromServer.map(goodFromServer => (
            <>
              <li
                key={goodFromServer}
                onClick={this.showSelectedGood}
              >
                {goodFromServer}
              </li>
              <button
                type="submit"
                key={goodFromServer}
                onClick={this.handleSelectedGood}
              >
                {selectedGoods.includes(goodFromServer) ? 'Remove' : 'Add'}
              </button>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
