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
    selectedGood: ['Jam'],
  }

  setSelectedGood = (good) => {
    this.setState(state => (
      { selectedGood: state.selectedGood.concat(good) }
    ));
  };

  setRemoveSelectedGood = (good) => {
    this.setState(state => (
      { selectedGood: state.selectedGood.filter(item => (
        item !== good
      )) }
    ));
  };

  actionWidthGoods = good => (
    this.state.selectedGood.some(elem => elem === good)
      ? this.setRemoveSelectedGood(good)
      : this.setSelectedGood(good)
  );

  titleSelectedGoods = () => (
    this.state.selectedGood.length
      ? `${this.state.selectedGood.map((good, index) => (
        1 + index === this.state.selectedGood.length && 1 + index > 1
          ? ` and ${good}`
          : good
      )).join(', ')} is selected`
      : 'no selected good'
  );

  render() {
    return (
      <div className="App">
        <span
         hidden={!this.state.selectedGood.length}
         onClick={() => (
           this.state.selectedGood.map(good => (
             this.setRemoveSelectedGood(good)
           ))
         )}
        >
          X
        </span>

        <h1>
          {this.titleSelectedGoods()}
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={this.state.selectedGood.some(elem => elem === good)
                ? 'goodActive'
                : ''}
              key={good}
            >
              {good}

              <button
                type="button"
                onClick={() => this.actionWidthGoods(good)}
              >

                {this.state.selectedGood.some(elem => elem === good)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
