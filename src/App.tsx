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
  goods: string[],
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGood: 'Jam',
  };

  render() {
    const { goods, selectedGood } = this.state;

    const addGood = (good: string) => {
      this.setState({ selectedGood: good });
    };

    const goodSelect = (good: string) => {
      return selectedGood === good;
    };

    const removeGood = () => {
      this.setState({ selectedGood: '' });
    };

    const selectedStatus = (selectedGood.length > 0)
      ? (
        <>
          <h1>
            {`${selectedGood} is selected`}
          </h1>
          <button
            type="button"
            className="app__title-button"
            onClick={removeGood}
          >
            x
          </button>
        </>
      )
      : <h1>No goods selected</h1>;

    return (
      <div className="app">
        <div className="app__title">
          {selectedStatus}
        </div>
        <ul className="app__list">
          {goods.map(good => {
            const onClick = (goodSelect(good))
              ? removeGood
              : () => addGood(good);

            const buttonText = goodSelect(good)
              ? 'Remove'
              : 'Select';

            const classNames = goodSelect(good)
              ? 'app__good-text--target'
              : 'app__good-text';

            return (
              <div className="app__good">
                <li
                  className={classNames}
                  key={good}
                >
                  {good}
                </li>
                <button
                  type="button"
                  className="button"
                  onClick={onClick}
                >
                  {buttonText}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
