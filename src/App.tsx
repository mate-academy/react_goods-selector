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

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  buttonClick = (item: string) => {
    const { selectedGoods } = this.state;

    this.setState(prevState => {
      if (selectedGoods.includes(item)) {
        return {
          selectedGoods: prevState.selectedGoods.filter(e => e !== item),
        };
      }

      return { selectedGoods: [...selectedGoods, item] };
    });
  };

  buttonClear = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  titleText = (selectedArr: string[]) => {
    switch (selectedArr.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedArr} is selected`;
      default:
        return `${selectedArr.slice(0, -1).join(', ')} and ${selectedArr[selectedArr.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods List</h1>
        <h1 className="app__title">
          { this.titleText(selectedGoods) }
        </h1>
        <div className="clear-btn-wrp">
          {Boolean(selectedGoods.length)
          && (
            <button
              onClick={this.buttonClear}
              className="clear-btn"
              type="button"
            >
              Clear
            </button>
          )}
        </div>
        <ul className="app__ul">
          {goodsFromServer.map((good) => {
            const goodsSelected = selectedGoods.includes(good);

            return (
              <div className={goodsSelected ? 'good' : 'good'} key={good}>
                <li className="good__name">{good}</li>
                <button
                  onClick={() => {
                    this.buttonClick(good);
                  }}
                  className="good__btn"
                  type="button"
                >
                  { goodsSelected ? 'Remove' : 'Select'}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
