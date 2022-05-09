/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prefer-stateless-function */
import classNames from 'classnames';
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
  selectedGood:string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  selectedHandler = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  removeHandler = (good: string) => {
    this.setState((prevState) => {
      prevState.selectedGood.splice(prevState.selectedGood.indexOf(good), 1);

      return { selectedGood: prevState.selectedGood };
    });
  };

  clearHandler = () => {
    this.setState({
      selectedGood: [],
    });
  };

  render() {
    const { selectedGood } = this.state;

    const goodTitle = () => {
      switch (selectedGood.length) {
        case 0:
          return 'No goods selected';
        case 1:
          return `${selectedGood[0]} is selected`;
        case 2:
          return `${selectedGood[0]} and ${selectedGood[1]} are selected`;
        default:
          return `${selectedGood.slice(0, selectedGood.length - 1).join(', ')}
            and ${selectedGood[selectedGood.length - 1]} are selected`;
      }
    };

    return (
      <div className="goods">
        <ul className="goods__list">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames(
                'goods__item',
                { 'goods__item--active': selectedGood.includes(good) },
              )}
            >
              <span className="goods__span">
                {good}
              </span>
              <button
                type="button"
                className="goods__button button"
                onClick={() => {
                  if (!selectedGood.includes(good)) {
                    this.selectedHandler(good);
                  } else {
                    this.removeHandler(good);
                  }
                }}
              >
                {
                  (!selectedGood.includes(good))
                    ? 'selected'
                    : 'remove'
                }
              </button>
            </li>
          ))}
        </ul>

        {selectedGood.length > 0 && (
          <button
            type="button"
            className="goods__clear-button button"
            onClick={this.clearHandler}
          >
            Clear selected list
          </button>
        )}

        <h2 className="goods__title">
          {
            goodTitle()
          }
        </h2>
      </div>
    );
  }
}

export default App;
