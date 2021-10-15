import React from 'react';
import './App.scss';

const goodsFromServer: Good[] = [
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

type Good = 'Dumplings' | 'Carrot' | 'Eggs' | 'Ice cream' | 'Apple' | 'Bread' | 'Fish' | 'Honey' | 'Jam' | 'Garlic';

type State = {
  selectedGoods: Good[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'] as Good[],
  };

  addGood(good: Good) {
    const { selectedGoods } = this.state;

    selectedGoods.push(good);
    this.setState({ selectedGoods });
  }

  header() {
    const { selectedGoods } = this.state;
    let head = '';

    switch (selectedGoods.length) {
      case 0:
        head = 'No goods selected';

        return head;
      case 1:
        head = `${selectedGoods[0]} is selected`;

        return head;

      default:
        head = `${selectedGoods.join(', ')} are selected`;

        return head;
    }
  }

  removeGood(good: Good) {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(item => item !== good) });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {this.header()}
        </h1>
        <div className="goods">
          {goodsFromServer.map(good => (
            <div className={selectedGoods.includes(good) ? 'goods__item active' : 'goods__item'}>
              {good}
              <button
                className="goods__button"
                onClick={
                  selectedGoods.includes(good)
                    ? () => this.removeGood(good)
                    : () => this.addGood(good)
                }
                type="button"
              >
                {selectedGoods.includes(good) ? 'Unselect' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
