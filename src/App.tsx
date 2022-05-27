import React from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';

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

  selectGoodHandler = (good: string) => {
    if (this.state.selectedGood.includes(good)) {
      this.setState(prevState => ({
        selectedGood: prevState.selectedGood.filter((item) => item !== good),
      }));
    } else {
      this.setState(prevState => ({
        selectedGood: [...prevState.selectedGood, good],
      }));
    }
  };

  clearSelections = () => {
    this.setState({ selectedGood: [] });
  };

  showGoods = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length === 0) {
      return 'No goods selected';
    }

    if (selectedGood.length === 1) {
      return `${selectedGood} is selected`;
    }

    const listOfGoods = [...selectedGood].map((item, index) => {
      if (selectedGood.length - 2 > index) {
        return `${item}, `;
      }

      if (selectedGood.length - 2 === index) {
        return `${item} and `;
      }

      return item;
    });

    return `${listOfGoods.join('')} are selected`;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="block container">
          <div className="block">
            <h1 className="content is-medium">
              {this.showGoods()}
            </h1>
            {selectedGood.length > 0 && (
              <button
                type="button"
                className="button is-black mb-2"
                onClick={this.clearSelections}
              >
                Clear
              </button>
            )}
          </div>
          <ul className="is-one-third content is-small">
            {goodsFromServer.map((item) => (
              <li
                key={item}
                className={classNames(
                  'goods__item',
                  {
                    'has-text-white has-background-success':
                    selectedGood.includes(item),
                  },
                )}
              >
                {item}
                <button
                  type="button"
                  className={classNames(
                    'button is-light',
                    { 'is-danger': selectedGood.includes(item) },
                  )}
                  onClick={() => {
                    this.selectGoodHandler(item);
                  }}
                >
                  {!selectedGood.includes(item) ? 'Select' : 'Remove'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
