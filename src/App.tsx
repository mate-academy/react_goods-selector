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

type Props = {
  selectedGood: string[];
};

class App extends React.Component<{}, Props> {
  state = {
    selectedGood: ['Jam'],
  };

  addGoods = (goods: string) => {
    this.setState((state => ({
      selectedGood: [...state.selectedGood, goods],
    })));
  };

  deleteGoods = () => {
    this.setState({ selectedGood: [] });
  };

  aboutProducts = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length === 1) {
      return `${selectedGood} is selected`;
    }

    if (selectedGood.length > 1) {
      return `${selectedGood.join(', ')} are selected`;
    }

    return 'No goods selected';
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="list__selected">
          Selected good:
          {' '}
          {this.aboutProducts()}
        </h1>

        <button
          type="button"
          className="list__button"
          onClick={this.deleteGoods}
        >
          X
        </button>
        {/* {goodsFromServer.length} */}
        <ul className="list">
          {goodsFromServer.map(goods => (
            <li key={goods} className="list__item">
              {goods}

              <button
                type="button"
                className={selectedGood.includes(goods)
                  ? 'list__button list__active'
                  : 'list__button'}
                onClick={() => {
                  this.addGoods(goods);
                }}
              >
                SELECT
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
