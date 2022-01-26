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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState({ selectedGoods: [good] });
  };

  deleteGood = () => {
    this.setState({ selectedGoods: [] });
  };

  titleGood = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods} is selected`;

      default:
        return '';
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.titleGood()}</h1>
        {!!selectedGoods.length && (
          <button
            type="button"
            onClick={this.deleteGood}
          >
            X
          </button>
        )}

        <div className="list">
          <ul className="list__goods">
            {goodsFromServer.map(good => (
              <li key={good} className="list__item">
                {good}
                {!selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
