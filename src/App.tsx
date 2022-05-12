import React from 'react';
import classNames from 'classnames';
import './App.scss';
import './reset.scss';

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

type Props = {};

type State = {
  selectedGood: string[];
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  selectHandler = (good: string) => {
    this.setState((prevState) => {
      const newState = [...prevState.selectedGood];

      if (prevState.selectedGood.includes(good)) {
        newState.filter((thing) => good === thing);
      } else {
        newState.push(good);
      }

      return ({
        selectedGood: newState,
      });
    });

    return this.state.selectedGood;
  };

  choiceTitle = (selectedGood: string[]) => {
    let title = 'No goods selected';

    if (selectedGood.length === 0) {
      title = 'No goods selected';
    }

    if (selectedGood.length === 1) {
      title = `${selectedGood} is selected`;
    }

    if (selectedGood.length >= 2) {
      const firstPart = selectedGood.slice(0, -1).join(', ');
      const secondPart = selectedGood.slice(-1);

      title = `${firstPart} and ${secondPart} are selected`;
    }

    return title;
  };

  render() {
    const {
      selectedGood,
    } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {this.choiceTitle(selectedGood)}
          <div className="app__title--gap" />
          <button
            type="button"
            className={
              classNames(
                'app__button',
                {
                  'app__button--selected': selectedGood.length === 0,
                },
              )
            }
            onClick={() => this.setState(
              { selectedGood: [] },
            )}
          >
            Clear
          </button>
        </h1>
        <ul className="app__list">
          {goodsFromServer.map((good) => {
            const conditionNames = selectedGood.includes(good);

            return (
              <li className="app__item" key={good}>
                <p
                  className={classNames(
                    'app__item-good',
                    {
                      'app__item-good--selected': conditionNames,
                    },
                  )}
                >
                  {good}
                </p>
                <button
                  type="button"
                  className={classNames(
                    'app__item-button',
                    {
                      'app__item-button--selected': conditionNames,
                    },
                  )}
                  onClick={() => this.selectHandler(good)}
                >
                  {selectedGood.includes(good)
                    ? 'Remove'
                    : 'Select'}
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
