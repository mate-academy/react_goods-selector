import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  clearSelectedGood = () => {
    this.setState({ selectedGood: [] });
  };

  changeSelectedGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  removeSelectedGood = (good: string) => {
    this.setState((state) => {
      const selectedGoods = state.selectedGood;
      const index = selectedGoods.indexOf(good);

      selectedGoods.splice(index, 1);

      return { selectedGood: selectedGoods };
    });
  };

  createTitle = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGood[0]} is selected`;

      case 2:
        return `${selectedGood.join(' and ')} are selected`;

      default:
        return `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <section className="products">
          <h1 className="products__title">
            <button
              type="button"
              className={classNames(
                'products__close',
                {
                  active__close: selectedGood.length === 0,
                },
              )}
              disabled={selectedGood.length === 0}
              onClick={this.clearSelectedGood}
            >
              X
            </button>
            <>
              {this.createTitle()}
            </>
          </h1>

          <ul className="products__goods">
            {goodsFromServer.map((good) => (
              <>
                <button
                  type="button"
                  className={classNames(
                    'products__button',
                    {
                      active__button: selectedGood.includes(good),
                    },
                  )}
                  onClick={() => {
                    if (selectedGood.includes(good)) {
                      return this.removeSelectedGood(good);
                    }

                    return this.changeSelectedGood(good);
                  }}
                >
                  {selectedGood.includes(good) ? 'Remove' : 'Select'}
                </button>
                <li
                  key={good}
                  className={classNames(
                    'products__good',
                    {
                      active: selectedGood.includes(good),
                    },
                  )}
                >
                  {good}
                </li>
              </>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
