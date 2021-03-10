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

  handleSelectedGood = (event) => {
    const good = event.target.previousSibling;

    const goodsData = this.state.selectedGoods;

    if (goodsData.includes(good.textContent) && goodsData.length > 0) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(item => (
          item !== good.textContent
        )),
      }));
    } else {
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
                className={
                  selectedGoods.includes(goodFromServer)
                    ? 'selected'
                    : ''
                }
              >
                {goodFromServer}
              </li>
              <button
                className="button"
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
