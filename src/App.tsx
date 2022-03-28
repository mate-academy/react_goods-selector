import React from 'react';
import './App.scss';
import { getGoodsTitle } from './helper';
import { goodsFromServer } from './Goods';

interface State {
  selectedGood: string;
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    selectedGoods: ['Jam'],
  };

  setGoodSelected = (good: string) => this.setState({ selectedGood: good });

  resetGoodSelection = () => this.setState({ selectedGood: '' });

  addGoodsSelected = (good: string) => this.setState(
    prevState => ({ selectedGoods: [...prevState.selectedGoods, good] }),
  );

  removeGoodsSelection = (good: string) => {
    const { selectedGoods } = this.state;

    const newSelected = selectedGoods.filter(selected => selected !== good);

    this.setState({ selectedGoods: newSelected });
  };

  resetGoodsSelection = () => this.setState({ selectedGoods: [] });

  render() {
    const { selectedGood, selectedGoods } = this.state;
    const goodsTitle = getGoodsTitle(selectedGoods);

    return (
      <div className="App">
        <div className="container">
          <section className="header">
            <h2>{selectedGood.length ? `${selectedGood} is selected` : 'No goods selected'}</h2>
            {selectedGood && (
              <button
                className="button button--close"
                type="button"
                onClick={this.resetGoodSelection}
              >
                X
              </button>
            )}
          </section>

          <ul className="list">
            {goodsFromServer.map((good) => (
              <li key={good} className="list__item">
                <div className={selectedGood === good ? 'list__item_active' : ''}>
                  {good}
                </div>

                {selectedGood !== good && (
                  <button
                    className="button"
                    type="button"
                    onClick={() => this.setGoodSelected(good)}
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <section className="header">
            <h2 className="header__title">{goodsTitle}</h2>
            {selectedGoods.length !== 0 && (
              <button
                className="button button--close"
                type="button"
                onClick={this.resetGoodsSelection}
              >
                X
              </button>
            )}
          </section>

          <ul className="list">
            {goodsFromServer.map((good) => {
              const isSelected = selectedGoods.includes(good);

              return (
                <li key={good} className="list__item">
                  <div className={isSelected ? 'list__item_active' : ''}>
                    {good}
                  </div>

                  {
                    !isSelected ? (
                      <button
                        className="button"
                        type="button"
                        onClick={() => this.addGoodsSelected(good)}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        className="button"
                        type="button"
                        onClick={() => this.removeGoodsSelection(good)}
                      >
                        Remove
                      </button>
                    )
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
