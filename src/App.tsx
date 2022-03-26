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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
    selectedGoods: ['Jam'],
  };

  getGoodsTitle = (goods: string[]) => {
    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    if (goods.length === 2) {
      return `${goods[0]} and ${goods[1]} are selected`;
    }

    if (goods.length > 2) {
      let titlePart = '';
      const lastElemIndex = goods.length - 1;

      for (let i = 0; i < lastElemIndex; i += 1) {
        if (i !== lastElemIndex - 1) {
          titlePart += `${goods[i]}, `;
        } else {
          titlePart += goods[i];
        }
      }

      return `${titlePart} and ${goods[lastElemIndex]} are selected`;
    }

    return 'No goods selected';
  };

  render() {
    const { selectedGood, selectedGoods } = this.state;
    const goodsTitle = this.getGoodsTitle(selectedGoods);

    return (
      <div className="App">
        <div className="container">
          <section className="header">
            <h2>{selectedGood.length ? `${selectedGood} is selected` : 'No goods selected'}</h2>
            {selectedGood && (
              <button
                className="button button--close"
                type="button"
                onClick={() => (
                  this.setState({ selectedGood: '' })
                )}
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
                    onClick={() => {
                      this.setState({ selectedGood: good });
                    }}
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
                onClick={() => (
                  this.setState({ selectedGoods: [] })
                )}
              >
                X
              </button>
            )}
          </section>

          <ul className="list">
            {goodsFromServer.map(good => {
              const isSelected = selectedGoods.find(selected => selected === good);

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
                        onClick={() => {
                          selectedGoods.push(good);
                          this.setState({ selectedGoods });
                        }}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        className="button"
                        type="button"
                        onClick={() => {
                          const newSelected = selectedGoods.filter(selected => selected !== good);

                          this.setState({ selectedGoods: newSelected });
                        }}
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
