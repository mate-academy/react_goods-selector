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

interface State {
  selectedGoodsList: string[],
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoodsList: ['Jam'],
  };

  selectGoods = (item: string) => {
    this.setState((state: State) => {
      state.selectedGoodsList.push(item);

      return { selectedGoodsList: state.selectedGoodsList };
    });
  };

  removeGood = (item: string) => {
    this.setState((state: State) => {
      state.selectedGoodsList.splice(state.selectedGoodsList.indexOf(item), 1);

      return { selectedGoodsList: state.selectedGoodsList };
    });
  };

  getGoodsString = (): string => {
    const { selectedGoodsList } = this.state;
    let resultString = '';

    switch (true) {
      case (selectedGoodsList.length === 0):
        resultString = 'No goods selected. Choose one or more:';
        break;
      case (selectedGoodsList.length === 1):
        resultString = `${selectedGoodsList[0]} is selected`;
        break;
      case (selectedGoodsList.length === 2):
        resultString = `${selectedGoodsList.join(' and ')} are selected`;
        break;
      case (selectedGoodsList.length === 10):
        resultString = `${[selectedGoodsList.slice(0, -1).join(', '),
          selectedGoodsList.slice(-1),
        ].join(' and ')} are selected. Nothing else to choose`;
        break;
      case (selectedGoodsList.length > 2):
        resultString = `${[selectedGoodsList.slice(0, -1).join(', '),
          selectedGoodsList.slice(-1),
        ].join(' and ')} are selected`;
        break;
      default:
        throw new Error('Ups... something wrong!');
    }

    return resultString;
  };

  clearSelectedGoodsList = () => {
    this.setState({ selectedGoodsList: [] });
  };

  render() {
    const { selectedGoodsList } = this.state;

    return (
      <div className="Page">
        <div className="App">
          <h1>{this.getGoodsString()}</h1>
          {
            (selectedGoodsList.length > 0) && (
              <button
                type="button"
                className="App__button"
                onClick={() => {
                  this.clearSelectedGoodsList();
                }}
              >
                X
              </button>
            )
          }
        </div>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`App__list-element ${
                selectedGoodsList.includes(good)
                  ? 'isActiv'
                  : ''
              }`}
            >
              {good}
              <button
                type="button"
                className="Button"
                onClick={
                  selectedGoodsList.includes(good)
                    ? () => this.removeGood(good)
                    : () => this.selectGoods(good)
                }
              >
                {selectedGoodsList.includes(good) ? '-' : '+'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
