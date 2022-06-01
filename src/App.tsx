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
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: [goodsFromServer[8]],
  };

  selectGood = (good: string) => {
    const { selectedGood } = this.state;

    if (selectedGood.includes(good)) {
      this.setState(prevState => ({
        selectedGood: prevState.selectedGood
          .filter(gooddie => gooddie !== good),
      }));
    } else {
      this.setState({ selectedGood: [...selectedGood, good] });
    }
  };

  switchCase = (param: string[] | []) => {
    switch (param.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${param[0]} is selected`;

      default:
        return `${param.slice(0, -1).join(', ')} and ${param[param.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.switchCase(selectedGood)}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (

            <div className="App__item" key={good}>
              <li>
                {good}
              </li>
              <button
                type="button"
                className={
                  selectedGood.includes(good)
                    ? 'button is-danger is-primary is-outlined'
                    : 'button is-link is-outlined'
                }
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                {selectedGood.includes(good) ? 'Remove' : 'Select'}
              </button>
            </div>

          ))}
        </ul>

        {selectedGood.length !== 0
          && (
            <button
              type="button"
              className="button is-link is-outlined button-big"
              onClick={() => {
                this.setState({ selectedGood: [] });
              }}
            >
              Clear
            </button>
          )}
      </div>
    );
  }
}

export default App;
