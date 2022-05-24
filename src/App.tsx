import React from 'react';
import className from 'classnames';
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
  selectedGoodslist: string[],
};

class App extends React.Component<{}, State> {
  state:State = {
    selectedGoodslist: ['Jam'],
  };

  addSelectedGood = (good: string) => {
    this.setState(({ selectedGoodslist }) => (
      { selectedGoodslist: [...selectedGoodslist, good] }
    ));
  };

  removeSelectedGood = (good: string) => {
    this.setState(({ selectedGoodslist }) => (
      { selectedGoodslist: selectedGoodslist.filter(item => item !== good) }
    ));
  };

  showSelectedGood = () => {
    const { selectedGoodslist } = this.state;

    switch (selectedGoodslist.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoodslist[0]} is selected`;
      default:
        return `${selectedGoodslist
          .slice(0, -1)
          .join(', ')} and ${selectedGoodslist[selectedGoodslist.length - 1]} are selected`;
    }
  };

  buttonAddRemoveHandler = (isSelected: boolean, good: string) => {
    return isSelected
      ? this.removeSelectedGood(good)
      : this.addSelectedGood(good);
  };

  buttonClearHandler = () => {
    this.setState({ selectedGoodslist: [] });
  };

  render() {
    return (
      <div className="App">
        <section className="title">
          <h1 className="title__h1">
            Selected good:
            <span
              className="title__selected-goods"
            >
              {this.showSelectedGood()}
            </span>
          </h1>
          {this.state.selectedGoodslist.length
            ? (
              <button
                type="button"
                className="button button__clear"
                onClick={() => this.buttonClearHandler()}
              >
                Clear
              </button>
            )
            : null}
        </section>
        <ul className="goods-list">
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGoodslist.includes(good);

            const buttonText = isSelected ? 'Remove' : 'Select';

            return (
              <li
                className={
                  className('goods-list__item', {
                    'goods-list__item--selected': isSelected,
                  })
                }
                key={good}
              >
                {good}
                <button
                  type="button"
                  className="button"
                  onClick={() => this.buttonAddRemoveHandler(isSelected, good)}
                >
                  {buttonText}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
