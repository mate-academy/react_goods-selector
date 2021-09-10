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

type State = {
  selectedGood: string | null,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  decreaseGood = () => {
    this.setState({
      selectedGood: null,
    });
  };

  selectGood = (good: string) => {
    this.setState(prevState => {
      if (prevState.selectedGood !== good) {
        return {
          selectedGood: good,
        };
      }

      return {
        selectedGood: prevState.selectedGood,
      };
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="
        App
        d-flex
        align-items-center
        justify-content-center"
      >
        <div className="goods-selector__container container-fluid">
          <h1 className="text-center">
            {'Selected goods: '}
            <br />
            <strong>
              {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
            </strong>
            {selectedGood && (
              <button
                type="button"
                className="
                  btn
                  btn-dark
                  d-inline-block ms-3"
                onClick={this.decreaseGood}
              >
                X
              </button>
            )}
          </h1>
          <ul className="list-group">
            {goodsFromServer.map(good => {
              return (
                <li
                  key={good}
                  className={
                    classNames(`
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center`,
                    { active: selectedGood === good })
                  }
                >
                  {good}
                  {selectedGood !== good && (
                    <button
                      type="button"
                      className="
                        btn
                        btn-primary
                        goods-selector__list-button"
                      onClick={() => this.selectGood(good)}
                    >
                      Select
                    </button>
                  )}
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
