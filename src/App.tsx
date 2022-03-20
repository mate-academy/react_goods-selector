import React from 'react';
import classNames from 'classnames';
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
  goods: string[],
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  updateGoods = (good: string) => {
    this.setState((prevState: State) => {
      return prevState.selectedGoods.includes(good)
        ? { selectedGoods: prevState.selectedGoods.filter(item => item !== good) }
        : { selectedGoods: [...prevState.selectedGoods, good] };
    });
  };

  clearSelection = () => {
    this.setState({ selectedGoods: [] });
  };

  getSelectedItems = () => {
    let selectedItems = '';
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        selectedItems = 'No goods selected';
        break;

      case 1:
        selectedItems = `${selectedGoods[0]} is selected`;
        break;

      default:
        selectedItems += selectedGoods[0];
        for (let i = 1; i < selectedGoods.length - 1; i += 1) {
          selectedItems += `, ${selectedGoods[i]}`;
        }

        selectedItems += ` and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    return selectedItems;
  };

  render() {
    const { goods, selectedGoods } = this.state;
    const isSelected = !!selectedGoods.length;
    const listOfSelected = this.getSelectedItems();

    return (
      <div className="App">
        <div className="App__content">
          <div className="App__titles">
            <h1 className="App__title">
              {listOfSelected}
            </h1>

            {isSelected && (
              <button
                type="button"
                onClick={this.clearSelection}
                className="App__clear"
              >
                x
              </button>
            )}
          </div>

          <ul className="App__list">
            {
              goods.map(good => (
                <>
                  <li
                    key={good}
                    className={classNames('App__item', {
                      'App__item--selected': selectedGoods.includes(good),
                    })}
                  >

                    <button
                      type="button"
                      className="App__button"
                      onClick={() => (
                        this.updateGoods(good)
                      )}
                    >
                      {selectedGoods.includes(good) ? '-' : '+'}
                    </button>
                    {good}
                  </li>
                </>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
