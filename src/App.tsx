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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  classChecker = (good: string) => {
    return this.state.selectedGoods.includes(good);
  };

  listOfGoodsWritter = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods.join(' and ')} are selected`;
      case 10:
        return 'All goods are selected';
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and `
        + `${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  selectedGoodChanger = (good: string) => {
    const checkedGoods = [...this.state.selectedGoods];

    if (checkedGoods.includes(good)) {
      const index = checkedGoods.indexOf(good);

      checkedGoods.splice(index, 1);
      this.setState({ selectedGoods: checkedGoods });
    } else {
      checkedGoods.push(good);
      this.setState({ selectedGoods: checkedGoods });
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__list box card">
          <h1
            className="notification is-info title is-5
          is-flex is-justify-content-space-between"
          >
            {this.listOfGoodsWritter()}
            {(selectedGoods.length !== 0)
            && (
              <button
                type="button"
                className="button is-danger"
                onClick={() => {
                  this.setState({ selectedGoods: [] });
                }}
              >
                Clear
              </button>
            )}

          </h1>
          <ul>
            {goodsFromServer.map(good => {
              const checked = this.classChecker(good);

              return (
                <div
                  key={good}
                  className="App__item box mb-1"
                >
                  <li className="is-flex is-justify-content-space-between">
                    <h3 className={classNames(
                      'title',
                      {
                        'is-3 has-text-black': checked,
                        'is-4 has-text-grey': !checked,
                      },
                    )}
                    >
                      {good}
                    </h3>

                    <button
                      type="button"
                      className={classNames(
                        'button',
                        {
                          'is-danger': checked,
                          'is-success': !checked,
                        },
                      )}
                      onClick={() => this.selectedGoodChanger(good)}
                    >
                      {selectedGoods.includes(good) ? 'remove' : 'select'}
                    </button>

                  </li>
                </div>
              );
            })}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
