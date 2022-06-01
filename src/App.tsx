import React from 'react';
import './App.scss';

const goodsArray = [
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

const goodsFromServer = goodsArray.map((item, index) => ({
  id: index + 1,
  good: `${item}`,
}));

// console.log(goodsFromServer);

export interface State {
  selectedGood: string[];
}

export class App extends React.Component <{}, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => {
      const selectedGoods = state.selectedGood;
      const index = selectedGoods.indexOf(good);

      selectedGoods.splice(index, 1);

      return { selectedGood: selectedGoods };
    });
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  getText = (length: number, arr: string[]) => {
    if (length === 1) {
      return `Selected goods - ${arr[0]} is selected`;
    }

    if (length === 2) {
      return `Selected goods - ${arr.join(' and ')} are selected`;
    }

    if (length > 2) {
      const partWithoutLast = arr.slice(0, arr.length - 1);

      return `Selected goods - ${partWithoutLast.join(', ')} and ${arr[arr.length - 1]} are selected`;
    }

    return 'Selected goods - No goods selected';
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <>
        <div className="App select is-small">
          <div className="notification title is-5">
            {this.getText(selectedGood.length, selectedGood)}
          </div>
          <div className="notification">
            {selectedGood && (
              <button
                type="button"
                onClick={() => this.clearGoods()}
                className={selectedGood.length === 0
                  ? 'button is-primary title is-5 is-hidden'
                  : 'button is-primary title is-5'}
              >
                Clear
              </button>
            )}
          </div>

          <ul className="box notification">
            {goodsFromServer.map((item) => {
              return (
                <li className="box" key={item.id}>
                  <span className="title is-5">{item.good}</span>
                  {' '}
                  <button
                    className={selectedGood.includes(item.good)
                      ? 'button is-danger ml-5 is-pulled-right'
                      : 'button is-primary ml-5 is-pulled-right'}
                    type="button"
                    onClick={() => {
                      if (selectedGood.includes(item.good)) {
                        return this.removeGood(item.good);
                      }

                      return this.selectGood(item.good);
                    }}
                  >
                    <span className="title is-5">
                      {selectedGood.includes(item.good)
                        ? 'Remove'
                        : 'Select'}
                    </span>
                  </button>
                </li>

              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
